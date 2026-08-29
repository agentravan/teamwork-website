import os

app_dir = 'src/app'

for root, dirs, files in os.walk(app_dir):
    for filename in files:
        if filename.endswith('page.tsx'):
            filepath = os.path.join(root, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if not content.startswith("'use client'") and not content.startswith('"use client"'):
                new_content = "'use client';\n\n" + content
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Added 'use client' to {filepath}")
