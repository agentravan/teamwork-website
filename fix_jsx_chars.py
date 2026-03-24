import os
import re

app_dir = 'src/app'

for root, dirs, files in os.walk(app_dir):
    for filename in files:
        if filename.endswith('.tsx'):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            modified = False
            # Find and replace standalone '<' or '<=' or '>' not part of HTML tags
            # A simple heuristic: if '<' is followed by a space, digit, or '=' it's not a tag
            new_content = re.sub(r'<\s', '&lt; ', content)
            new_content = re.sub(r'<=', '&lt;=', new_content)
            new_content = re.sub(r'\s>', ' &gt;', new_content)
            
            # Also fix `class=` if any slipped through
            new_content = new_content.replace(' class=', ' className=')
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Fixed {filepath}")

# Optional: removing broken files that are not critical if they continue to fail
