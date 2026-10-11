# Tanjim Al Shahriar Arup — Personal Portfolio

A responsive static portfolio website built with HTML, CSS, and vanilla JavaScript. It is designed for GitHub Pages and includes SEO metadata, Open Graph/Twitter previews, Person + WebSite JSON-LD structured data, `robots.txt`, `sitemap.xml`, and `llms.txt`.

## Before publishing: personalize the content

This starter intentionally avoids inventing education, work history, skills, awards, or project results. Replace all content prompts in `index.html` with facts you can verify.

1. Open `index.html` in a text editor such as VS Code.
2. Search for phrases such as `Add a`, `goes here`, `Tool to add`, `Organisation`, and `Replace them`.
3. Replace the prompts in Skills, Highlights, Selected Work, and Experience & Qualifications with your real information. Delete any cards you do not need.
4. Update the Now & Next cards in the `id="updates"` section when your ongoing work changes. Keep the `datetime` value of each `<time>` element in `YYYY-MM-DD` format.
5. Open `site-config.js` to activate your WhatsApp and Facebook buttons:
   - `whatsappNumber`: your international phone number including country code, digits only. Do not include `+`, spaces, or hyphens.
   - `facebookUrl`: your public Facebook profile URL, beginning with `https://www.facebook.com/`.
   The two buttons stay intentionally inactive until valid contact information is entered.

## Important: change these values if you use a different website URL

This project is preconfigured for `https://tanjimarup.github.io/` and the repository `TanjimArup.github.io`. If you publish as a project site in another repository (for example `https://tanjimarup.github.io/my-portfolio/`), update the canonical URL, `og:url`, absolute `og:image`/Twitter image URL, the Person/WebSite URLs in the JSON-LD, `robots.txt`, `sitemap.xml`, and the URL in `llms.txt` to match your actual published site.

## Publish with GitHub Pages (recommended: user site)

1. Sign in to GitHub.
2. Create a **new public repository** named exactly `TanjimArup.github.io` (the name needs to match your GitHub username plus `.github.io`).
3. Unzip this project on your computer. Open the extracted `tanjim-portfolio` folder.
4. Upload the *contents* of this folder to the repository root — `index.html`, `site-config.js`, `assets/`, `robots.txt`, `sitemap.xml`, `llms.txt`, `404.html`, and `README.md`. Do not upload only the ZIP file.
   - On the repository page, choose **Add file → Upload files**.
   - Drag the files and folders into the upload area, then commit to the `main` branch.
   - If your browser does not upload folders reliably, use GitHub Desktop or Git commands (see below).
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**, set branch to `main` and folder to `/(root)`, then press **Save**. If this is already selected, make sure the site files are on `main` at the repository root.
7. Wait a few minutes, then open `https://tanjimarup.github.io/`. The Pages screen shows the deployment status and published address.
8. Visit the website on both desktop and mobile. Test each navigation item and social button.

### Alternative: publish using GitHub Desktop

1. Install GitHub Desktop and sign in to GitHub.
2. Clone the `TanjimArup.github.io` repository to your computer.
3. Copy all project files into that cloned repository folder.
4. In GitHub Desktop, review the changed files, enter a summary such as `Add portfolio website`, and click **Commit to main**.
5. Click **Push origin**. GitHub Pages will publish the update automatically.

### Alternative: publish with Git from a terminal

Run these commands in the folder containing your project files (not inside a nested folder):

```bash
git init
git branch -M main
git add .
git commit -m "Add personal portfolio website"
git remote add origin https://github.com/TanjimArup/TanjimArup.github.io.git
git push -u origin main
```

If the remote repository already contains a README or other commit, it may be easier to clone it first and copy the site files into the cloned folder before pushing.

## SEO and AI-crawler notes

- `index.html` contains descriptive title/description tags, canonical URL, Open Graph and Twitter card metadata, and Person/WebSite JSON-LD.
- Core content is present in the HTML source rather than being generated solely by JavaScript, which makes the page easier for many crawlers to read.
- `robots.txt` allows standard crawlers and advertises the sitemap; `sitemap.xml` lists the home page; `llms.txt` provides a brief context/navigation file for systems that choose to read it.
- Once published, add the real URL to Google Search Console and Bing Webmaster Tools, complete their ownership verification, then submit `https://tanjimarup.github.io/sitemap.xml` where supported.
- Use Google's Rich Results Test / Schema Markup Validator to check structured data, and the Facebook Sharing Debugger / LinkedIn Post Inspector to refresh link previews after the site is public.
- Crawlers choose their own discovery, crawling, indexing, and recommendation policies. SEO metadata and bot access improve clarity but cannot guarantee that an AI system will crawl the page, index it, or recommend the profile.
- Add only accurate personal details and credentials. Structured data should reflect visible, verifiable page content.

## Files

- `index.html` — the content, navigation, SEO metadata, social previews, and JSON-LD.
- `assets/styles.css` — responsive styling and dark/light theme styles.
- `assets/script.js` — mobile navigation, theme switch, footer year, and contact-button setup.
- `site-config.js` — WhatsApp number and Facebook profile configuration.
- `assets/profile.webp` — optimized version of your uploaded portrait.
- `assets/og-image.jpg` — 1200×630 social share preview image.
- `assets/favicon.svg` — lightweight browser icon.
- `robots.txt`, `sitemap.xml`, `llms.txt` — crawler discovery and context files.

## Local preview

You can double-click `index.html` to preview it. For a more realistic local web server, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`. Stop the server with `Ctrl+C`.
