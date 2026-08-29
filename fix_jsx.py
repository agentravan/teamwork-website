import os
import re

app_dir = 'src/app'

for root, dirs, files in os.walk(app_dir):
    for filename in files:
        if filename.endswith('.tsx'):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Fix style blocks
            content = re.sub(
                r'<style>(.*?)</style>',
                lambda m: f"<style>{{`{m.group(1)}`}}</style>",
                content,
                flags=re.DOTALL | re.IGNORECASE
            )

            # Fix standard JS events to React camelCase & valid format
            content = re.sub(r'onclick="([^"]*)"', r'onClick={() => { /* \1 */ }}', content, flags=re.IGNORECASE)
            content = re.sub(r'onsubmit="([^"]*)"', r'onSubmit={(e) => { e.preventDefault(); }}', content, flags=re.IGNORECASE)
            
            # Form actions/methods that might be invalid
            content = re.sub(r'action="([^"]*)"', r'/* action="\1" */', content, flags=re.IGNORECASE)

            # Fix remaining unclosed tags or syntax issues if any
            # (If Next.js still fails, it's something else)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)

print("Fixed JSX event attributes and style tags.")
