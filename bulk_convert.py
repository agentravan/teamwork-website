import os
import re

def convert_html_to_jsx(html_content):
    jsx = html_content.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('<!--', '{/*')
    jsx = jsx.replace('-->', '*/}')
    
    def style_replacer(match):
        style_str = match.group(1)
        rules = style_str.split(';')
        jsx_styles = []
        for rule in rules:
            if ':' in rule:
                key, val = rule.split(':', 1)
                key = key.strip()
                val = val.strip().replace("'", "\\'")
                parts = key.split('-')
                camel_key = parts[0] + ''.join(p.title() for p in parts[1:])
                jsx_styles.append(f"'{camel_key}': '{val}'")
        return 'style={{' + ', '.join(jsx_styles) + '}}'
        
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    jsx = re.sub(r'<img([^>]*)(?<!/)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<input([^>]*)(?<!/)>', r'<input\1 />', jsx)
    jsx = re.sub(r'<br([^>]*)(?<!/)>', r'<br\1 />', jsx)
    jsx = re.sub(r'<hr([^>]*)(?<!/)>', r'<hr\1 />', jsx)
    
    # Fix a specific bug from previous manual style edits
    jsx = jsx.replace("''Space Grotesk''", '"\'Space Grotesk\'"')
    
    return jsx

root_dir = '..'
app_dir = 'src/app'

# Files to skip (already handled manually)
skip_files = ['index.html', 'careers.html', 'hrms-dashboard.html']

for filename in os.listdir(root_dir):
    if filename.endswith('.html') and filename not in skip_files:
        route_name = filename[:-5] # remove .html
        
        # specific remapping for clean urls if needed, otherwise just create app/filename/page.tsx
        route_dir = os.path.join(app_dir, route_name)
        os.makedirs(route_dir, exist_ok=True)
        
        with open(os.path.join(root_dir, filename), 'r', encoding='utf-8') as f:
            html = f.read()
            
        body_match = re.search(r'<body[^>]*>(.*?)(<script|</body)', html, re.DOTALL | re.IGNORECASE)
        if body_match:
            body_content = body_match.group(1)
            # Remove loader and headers since layout handles global header structure ideally, 
            # but to be safe we just convert the whole body.
            jsx_content = convert_html_to_jsx(body_content)
            
            page_tsx = f"""import React from 'react';

export default function Page() {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""
            with open(os.path.join(route_dir, 'page.tsx'), 'w', encoding='utf-8') as f:
                f.write(page_tsx)
            print(f"Migrated {filename} to /{route_name}")

