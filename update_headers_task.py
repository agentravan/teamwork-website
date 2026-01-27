
import glob
import os
import re

def update_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Check if already updated
    if 'css/header-premium.css' in content and 'js/unified-header.js' in content:
        print(f"Skipping {filepath} - already updated.")
        return

    # 2. Inject CSS
    # Add premium css before closing head
    # We also keep mega-menu.css if present
    premium_css_link = '    <link rel="stylesheet" href="css/header-premium.css">\n'
    if '</head>' in content:
        content = content.replace('</head>', premium_css_link + '</head>')
    
    # 3. Inject Header Container
    # Add container after body start
    container_html = '\n    <div id="global-header-container"></div>'
    if '<body' in content:
        # Regex to match <body class="..."> or <body>
        content = re.sub(r'(<body[^>]*>)', r'\1' + container_html, content, count=1)
    
    # 4. Remove Old Header
    # Pattern: <header class="site-header"> ... </header>
    # We use non-greedy match for content *?
    # We assume 'site-header' is the class name for the navigation header.
    # We verified index.html has another header class="section-padding", so we must be specific.
    
    header_pattern = re.compile(r'\s*<!--.*?HEADER.*?-->\s*<header class="site-header">[\s\S]*?</header>', re.IGNORECASE)
    
    # Alternative pattern if comments are missing or different
    header_pattern_simple = re.compile(r'\s*<header class="site-header">[\s\S]*?</header>', re.IGNORECASE)
    
    match = header_pattern.search(content)
    if match:
        print("Removing header block with comments...")
        content = content.replace(match.group(0), '')
    else:
        match_simple = header_pattern_simple.search(content)
        if match_simple:
            print("Removing header block (simple)...")
            content = content.replace(match_simple.group(0), '')
        else:
            print(f"WARNING: Could not find <header class='site-header'> in {filepath}")

    # 5. Inject JS
    js_script = '\n    <script src="js/unified-header.js"></script>'
    if '</body>' in content:
        content = content.replace('</body>', js_script + '\n</body>')

    # 6. Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath}")

def main():
    root_dir = os.getcwd()
    html_files = glob.glob(os.path.join(root_dir, "*.html"))
    print(f"Found {len(html_files)} HTML files.")
    
    for html_file in html_files:
        try:
            update_file(html_file)
        except Exception as e:
            print(f"Failed to update {html_file}: {e}")

if __name__ == "__main__":
    main()
