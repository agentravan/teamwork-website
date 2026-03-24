import re

def convert_html_to_jsx(html_content):
    # Basic replacements
    jsx = html_content.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('<!--', '{/*')
    jsx = jsx.replace('-->', '*/}')
    
    # Simple inline style conversion hack for react
    def style_replacer(match):
        style_str = match.group(1)
        rules = style_str.split(';')
        jsx_styles = []
        for rule in rules:
            if ':' in rule:
                key, val = rule.split(':', 1)
                key = key.strip()
                val = val.strip()
                # camelCase keys
                parts = key.split('-')
                camel_key = parts[0] + ''.join(p.title() for p in parts[1:])
                jsx_styles.append(f"'{camel_key}': '{val}'")
        return 'style={{' + ', '.join(jsx_styles) + '}}'
        
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    
    # Close empty tags
    jsx = re.sub(r'<img([^>]*)(?<!/)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<input([^>]*)(?<!/)>', r'<input\1 />', jsx)
    jsx = re.sub(r'<br([^>]*)(?<!/)>', r'<br\1 />', jsx)
    jsx = re.sub(r'<hr([^>]*)(?<!/)>', r'<hr\1 />', jsx)
    
    return jsx

with open('../index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract body contents
body_match = re.search(r'<body>(.*?)<script', html, re.DOTALL | re.IGNORECASE)
if body_match:
    body_content = body_match.group(1)
    jsx_content = convert_html_to_jsx(body_content)
    
    page_tsx = f"""import React from 'react';

export default function Home() {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""
    with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(page_tsx)
    print("Successfully converted index.html to page.tsx")
else:
    print("Could not find body content")

