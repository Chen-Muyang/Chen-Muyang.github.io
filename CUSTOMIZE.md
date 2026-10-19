# Customize your Fuwari site

Your site remains at `https://chen-muyang.github.io/`. The top navigation keeps Publications, Notes, Blog Posts, and CV. The homepage adds an introduction and recent posts.

## Images you can replace

| Image | Current source | File to replace | Suggested size |
| --- | --- | --- | --- |
| Background banner | Your Kyoto / Kinkaku-ji photo | `src/assets/images/banner.jpg` | Landscape, at least 1920 px wide. Keep the subject near the center; the site crops differently on phones. |
| Profile avatar | Your existing illustrated avatar | `src/assets/images/avatar.png` | Square, 512 × 512 px or larger |
| Start cover | Your Kyoto photo | `public/images/Kyoto.jpg` | Landscape, 1600–2000 px wide |
| New Life cover | Your Old Main photo | `public/images/OldMain.jpg` | Landscape, 1600–2000 px wide |
| Some Mind Sparks cover | Your Mount Nittany photo | `public/images/Nittany2.jpg` | Landscape, 1600–2000 px wide |
| Review of Modern PhD cover | Your Mount Nittany photo | `public/images/Nittany.jpg` | Landscape, 1600–2000 px wide |
| Browser-tab icon | Simple “C” monogram | `public/favicon.svg` | Square SVG, or change the favicon path in `src/config.ts` |

Replace a file with the same name to change it without editing code. The banner and avatar are optimized automatically during the build. The blog photographs are also used within your existing posts, so replacing one changes both its cover and inline photograph. To give a post an independent cover, add an image to `public/images/` and change only that post's `image:` field.

You can use a different image format or filename by changing `siteConfig.banner.src` or `profileConfig.avatar` in `src/config.ts`. Banner position accepts `top`, `center`, or `bottom`. Set `banner.enable` to `false` if you prefer no background image. These initial images come from your own existing repository; no external image service is required.

## Text and content

- Site title, accent hue, avatar, navigation, and sidebar biography: `src/config.ts`.
- Homepage introduction: `src/components/HomeIntro.astro`.
- About page and weekly poem: `src/content/spec/about.md`.
- CV: `src/content/spec/cv.md`.
- Blog posts: `src/content/posts/*.md`. Keep each migrated `slug` to preserve existing links. New posts need `title` and `published`; images are optional. Use `draft: true` to hide unfinished posts from production.
- Notes: `src/content/notes/*.md`. Keep `permalink`, `paper`, and `paperLabel` accurate.
- Publications: `src/content/publications/*.md`. Each entry appears automatically without needing a matching category setting. `paper` and optional `slides` each produce their own button.
- Downloadable documents: `public/files/`. The thesis uses `UndergraduateThesis.pdf`; its converted slides use `Defense.pdf`. `Defense.pptx` remains available too.

The former Jekyll content at `_posts`, `_teaching`, `_publications`, `_pages`, `images`, and `files` is retained as migration reference. Edit the new `src/content` and `public` paths for the Fuwari site. Avoid editing both copies.

## Build and preview

Use Node.js 24 and pnpm 11.25.0:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm verify
pnpm preview
```

Use the production preview to test search, because Pagefind indexes the compiled site. The development server is `pnpm dev`.

## Publish on GitHub Pages

The `Build and deploy Fuwari` workflow checks pull requests and deploys only from `master`. Before merging the redesign, set repository **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. A pull request does not publish or replace the current site. The workflow runs the production build, search indexing, and internal-link verification before deployment.

The template is Fuwari by saicaca (see `LICENSE-FUWARI`); existing repository license information is retained. No new content license is imposed on your writing.
