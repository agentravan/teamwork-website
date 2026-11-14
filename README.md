# Team Work website

Company website for Team Work (Gurugram). Plain static pages, no framework and no dependencies.

- `build.mjs` holds every page's text and the shared header and footer. `node build.mjs` writes the site to `dist/`.
- `styles.css` is the one stylesheet. `assets/logo-mark.png` is the logo.
- `vercel.json` tells Vercel to run the build and serve `dist/`. `/login` and `/admin` redirect to the LeadNex CRM sign-in.

To change wording, edit the page in `build.mjs` and push. The previous Next.js site is in the git history before the "New Team Work company website" commit.
