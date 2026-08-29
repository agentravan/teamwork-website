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
    jsx = jsx.replace("''Space Grotesk''", '"\'Space Grotesk\'"')

    # Fix onclick and onsubmit
    jsx = re.sub(r'onclick="([^"]*)"', r'onClick={() => { /* \1 */ }}', jsx, flags=re.IGNORECASE)
    jsx = re.sub(r'onsubmit="([^"]*)"', r'onSubmit={(e) => { e.preventDefault(); }}', jsx, flags=re.IGNORECASE)
    jsx = re.sub(r'action="([^"]*)"', r'/* action="\1" */', jsx, flags=re.IGNORECASE)
    
    # Fix style blocks
    jsx = re.sub(
        r'<style>(.*?)</style>',
        lambda m: f"<style>{{`{m.group(1)}`}}</style>",
        jsx,
        flags=re.DOTALL | re.IGNORECASE
    )
    
    return jsx

root_dir = '..'
app_dir = 'src/app'

skip_files = ['index.html', 'careers.html', 'hrms-dashboard.html']

for filename in os.listdir(root_dir):
    if filename.endswith('.html') and filename not in skip_files:
        route_name = filename[:-5]
        route_dir = os.path.join(app_dir, route_name)
        os.makedirs(route_dir, exist_ok=True)
        
        with open(os.path.join(root_dir, filename), 'r', encoding='utf-8') as f:
            html = f.read()
            
        # extract body cleanly
        body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
        if body_match:
            body_content = body_match.group(1)
            
            # remove all scripts
            body_content = re.sub(r'<script.*?</script>', '', body_content, flags=re.DOTALL | re.IGNORECASE)
            
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
            print(f"Re-migrated {filename}")
