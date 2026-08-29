import os

files_to_fix = [
    r"src/app/calculator-esic/page.tsx",
    r"src/app/calculator-pf/page.tsx",
    r"src/app/login/candidate/page.tsx",
    r"src/app/login/hrx/page.tsx"
]

for filepath in files_to_fix:
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Revert the rogue replacements
        content = content.replace(" &gt;", ">")
        # Also let's fix the `< ` which might have broken closing tags if it was like `< div`
        content = content.replace("&lt; ", "< ")
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Restored {filepath}")

