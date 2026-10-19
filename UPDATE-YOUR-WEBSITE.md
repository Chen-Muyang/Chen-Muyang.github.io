# How to update your personal website

Your new site uses Fuwari with Astro. You write in Markdown, place documents and pictures in folders, and upload changes to GitHub. The workflow rebuilds the website after each update to `master`.

## The files you will use most

| What you want to change | Where to edit |
| --- | --- |
| Name, sidebar biography, links, title, default accent color | `src/config.ts` |
| Homepage introduction | `src/components/HomeIntro.astro` |
| About text, research interests, weekly poem | `src/content/spec/about.md` |
| CV | `src/content/spec/cv.md` |
| Blog posts | `src/content/posts/` |
| Notes and seminar slides | `src/content/notes/` |
| Publications | `src/content/publications/` |
| PDFs and PowerPoint files | `public/files/` |
| Photos used by posts | `public/images/` |
| Background banner | `src/assets/images/banner.jpg` |
| Profile avatar | `src/assets/images/avatar.png` |

The old `_posts`, `_teaching`, `_publications`, `_pages`, `_config.yml`, `images`, and `files` directories may still exist in your repository as migration reference. Editing them will not update the new Fuwari website. Use the new paths above. A public URL such as `/files/Defense.pdf` corresponds to the local file `public/files/Defense.pdf`.

## A. Your normal update routine

1. Open GitHub Desktop and select `Chen-Muyang.github.io`.
2. Switch to `master`, then **Fetch origin → Pull origin** if a pull is offered.
3. Choose **Repository → Show in Explorer**. Open the relevant file in a text editor, such as [Visual Studio Code](https://code.visualstudio.com/).
4. Make your edits and save the files. On Windows, show file extensions so `my-post.md` does not accidentally become `my-post.md.txt`.
5. Return to Desktop and review **Changes**. Enter a short summary, such as `Add a note on spin fluctuations`.
6. Click **Commit to master**, then **Push origin**. Saving or committing alone does not update the live site.
7. Open the repository's **Actions** tab. Wait for the **Build and deploy Fuwari** run to succeed, then refresh your website.

If your repository requires pull requests, or you want to check a larger change first, create a branch from `master`, commit/publish it, open a pull request, and merge after its build passes. The first-publication guide explains that process.

For a small text correction, you can also open the file on GitHub, click its pencil icon, edit, and use **Commit changes**. Then pull the new version in Desktop before your next local edit. Use Desktop for adding photos, PDFs, or several related files together.

## B. Add a blog post

Create `src/content/posts/my-new-post.md`. Copy this example, changing the title, date, and body:

```markdown
---
title: "A new research semester"
published: 2026-10-19
description: "A few thoughts about research and life at Penn State."
image: "/images/my-new-photo.jpg"
tags: [Physics, Life]
category: Life
draft: false
lang: en
---

Write your introduction here.

## A section heading

You can use **bold text**, *italics*, and [a link](https://www.psu.edu/).

![Describe what is in the photograph](/images/my-new-photo.jpg)

Inline mathematics works: $E = mc^2$.

$$
H = \sum_i h_i
$$
```

Put the corresponding photograph in `public/images/my-new-photo.jpg`. If you do not want a cover, use `image: ""` and remove the example photograph from the body. Images are optional: the template does not require a new background for each article.

The page normally appears at `/posts/my-new-post/`. `published` controls sorting; it is not a publication scheduler. A future-dated entry with `draft: false` will still be visible. Set `draft: true` while writing, then change it to `false` when ready. Drafts appear in the development server but are excluded from the production build, archive, and feed.

The four migrated posts have explicit `slug:` values preserving their former URLs. Keep those slugs unchanged when editing their contents. New posts do not need a `slug`, unless you want a custom path such as `2026/10/my-new-post` (without leading or trailing `/`).

Optional front matter: `updated: 2026-10-20` records a later edit. Quote titles containing punctuation such as a colon. Keep both `---` lines, use spaces instead of tabs, and write dates in `YYYY-MM-DD` form.

## C. Add a note or seminar

1. Copy your PDF to `public/files/Spin-Fluctuations.pdf`.
2. Create `src/content/notes/spin-fluctuations.md` with the following structure.
3. Change the example details and write your explanation below the second `---`.

```markdown
---
title: "Spin fluctuation notes"
published: 2026-10-19
permalink: /teaching/spin-fluctuations
topic: Superconductivity
venue: Penn State University, Department of Physics
description: "Working notes on spin fluctuations and pairing."
paper: /files/Spin-Fluctuations.pdf
paperLabel: Read note (PDF)
---

A short introduction, assumptions, and references can go here.
```

The note appears automatically in **Notes**. The old `/teaching/` URL is intentionally retained for this section. Use a unique permalink beginning with `/teaching/`, with no trailing slash. `paperLabel` can also be `Slides (PDF)` for a seminar deck. Notes do not currently support draft flags; add them to your published branch when ready.

## D. Add a publication with both paper and slides

1. Copy the PDFs into `public/files/`, for example `My-Paper.pdf` and `My-Talk.pdf`.
2. Create `src/content/publications/my-paper.md`:

```markdown
---
title: "Title of my paper"
published: 2026-10-19
permalink: /publication/my-paper
topic: Research paper
venue: "Journal or conference name"
description: "One or two sentences describing the work."
paper: /files/My-Paper.pdf
paperLabel: Paper (PDF)
slides: /files/My-Talk.pdf
---

Authors, an abstract, citation, and a DOI link can go here.
```

Every entry appears in **Publications** automatically; you do not need to register its topic in a separate configuration file. `paper` is required and `slides` is optional. If there are no slides, omit that entire line rather than leaving a blank value. You can optionally add `presentation: /files/My-Talk.pptx` for the editable PowerPoint download.

Your existing thesis already has working buttons for `UndergraduateThesis.pdf` and `Defense.pdf`. The slides PDF was exported from your existing `Defense.pptx`. Updating the PowerPoint alone does not refresh its PDF: in PowerPoint, use **File → Export → Create PDF/XPS**, save a new `Defense.pdf`, and replace `public/files/Defense.pdf` too. Keeping the same filename keeps existing links working. Publications do not currently support draft flags.

## E. Replace the background, avatar, and cover photos

| Picture | Replace this file | Current picture |
| --- | --- | --- |
| Main background banner | `src/assets/images/banner.jpg` | Your Kyoto / Kinkaku-ji photograph |
| Profile avatar | `src/assets/images/avatar.png` | Your illustrated avatar |
| Start cover | `public/images/Kyoto.jpg` | Kyoto |
| New Life cover | `public/images/OldMain.jpg` | Old Main |
| Some Mind Sparks cover | `public/images/Nittany2.jpg` | Mount Nittany |
| Review of Modern PhD cover | `public/images/Nittany.jpg` | Mount Nittany |
| Browser-tab icon | `public/favicon.svg` | Green “C” monogram |

Use a wide landscape image for the banner (about 1920–2400 pixels wide) and a square image for the avatar (512 × 512 pixels or larger). The banner crops to fit the screen, so keep your subject near the center. The banner and avatar are optimized during the build. Post photographs are served from `public` as supplied; resize/compress very large new photos before adding them.

Replacing a file with the same name is the easiest method. Keep the actual file format correct: renaming a PNG to `.jpg` does not convert it. The current post photos are also used inside posts, so replacing one changes both uses. For an independent cover, add another image and change only the post's `image:` field.

To use a different banner filename, edit `src/config.ts`:

```typescript
banner: {
  enable: true,
  src: "assets/images/my-banner.webp",
  position: "center",
  credit: { enable: false, text: "", url: "" },
},
```

Place that file at `src/assets/images/my-banner.webp`. Set `enable: false` to remove the background entirely. Set `position` to `top`, `center`, or `bottom` to adjust the crop. The avatar path is `profileConfig.avatar` in the same file.

## F. Update your personal details and appearance

In `src/config.ts`, edit `profileConfig.name`, `bio`, and `links`. Edit `siteConfig.title` and `subtitle` for the site's name and description. Keep the quotation marks and commas around these values.

The default accent is `themeColor: { hue: 165, fixed: false }`. Change the hue (0–360) for a different default color. Visitors can adjust it themselves because `fixed` is false; setting it true hides the color picker. The light/dark control is already included. A visitor's saved preference may override the default you just changed, so test defaults in a private window.

For the homepage introduction, edit the visible text in `src/components/HomeIntro.astro` while leaving the HTML tags intact. For the About page, weekly poem, and CV, edit the Markdown files in the table at the top. The inherited CV is brief; expand it with your own verified details whenever you wish.

## G. Optional local preview before uploading

You can publish using GitHub's build without installing these tools. For editing with a local preview:

1. Install **Node.js 24** from [nodejs.org](https://nodejs.org/).
2. In File Explorer, open the source/repository folder containing `package.json`. Type `cmd` in Explorer's address bar and press Enter to open a command window there.
3. Run these commands one line at a time:

```sh
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by the server (normally `http://localhost:4321`). Changes refresh as you save. Press **Ctrl + C** to stop the server. To check the actual production build, including search:

```sh
pnpm check
pnpm build
pnpm verify
pnpm preview
```

Search uses the production index, so test it with `pnpm preview`, not `pnpm dev`. The compiled-preview ZIP also includes a standalone Node server and its own instructions; it needs no dependency installation.

## H. Before each update

- Check exact spelling and uppercase/lowercase in every new file path.
- Open any new PDF and confirm that it is the intended document.
- Keep migrated slugs and permalinks to preserve existing links.
- Do not edit `dist/` or `node_modules/`; they are generated, and changes there will be lost.
- Commit the source and any new assets, then push and wait for the workflow to finish.

The verification script protects the migrated routes and the original four document filenames. If you intentionally remove those pages or rename those four files, you must also update `scripts/verify-site.mjs`; otherwise the build will correctly report that a preserved resource is missing. Adding new content or changing existing titles/text does not require changing that script.
