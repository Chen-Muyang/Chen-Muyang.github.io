# Publish your new website on GitHub

This guide is written for your existing repository, **Chen-Muyang/Chen-Muyang.github.io**, whose publishing branch is **master**. Your website address remains [chen-muyang.github.io](https://chen-muyang.github.io/).

This guide explains the first publication and how the deployment works. If the Fuwari site is already live, go directly to [UPDATE-YOUR-WEBSITE.md](UPDATE-YOUR-WEBSITE.md) for everyday changes. GitHub builds the site for you; you do not need Node.js on your computer to use this publishing method.

## 1. Understand the two downloads

- **Chen-Muyang-Fuwari-source.zip** contains the editable website. This is the download to copy into your repository. After extracting it, open the `Chen-Muyang-Fuwari-source` folder.
- **Chen-Muyang-Fuwari-preview.zip** contains an already compiled snapshot. It is useful for viewing the design locally. Do not copy this ZIP into the repository or use it instead of the source package.

The source package includes `src`, `public`, `.github`, `package.json`, and the build configuration. It contains no Git credentials, Git history, installed dependencies, or build cache. The old Jekyll folders already in your repository can stay there as reference; the new build uses `src/content` and `public`.

## 2. Install GitHub Desktop and sign in

1. Download [GitHub Desktop](https://desktop.github.com/) and install it.
2. Open it and sign in to the GitHub account that owns `Chen-Muyang/Chen-Muyang.github.io`.
3. Finish the browser sign-in prompts, then return to GitHub Desktop.

A **repository** is the website's project folder. A **commit** saves a version of your changes. **Push** uploads those commits. A **branch** lets you prepare the redesign separately. A **pull request** gives you a page to review and merge that branch.

## 3. Download your existing repository into Desktop

1. Choose **File → Clone repository**.
2. Select the **URL** tab and paste `https://github.com/Chen-Muyang/Chen-Muyang.github.io`.
3. Choose a local folder you can find again, such as `Documents/GitHub/Chen-Muyang.github.io`.
4. Click **Clone** and wait for it to finish.
5. At the top, confirm that **Current repository** is `Chen-Muyang.github.io` and **Current branch** is `master`.
6. Click **Fetch origin**. If it changes to **Pull origin**, click that too so you start from the latest version.

If this repository is already in Desktop, select it and fetch/pull instead of cloning a second copy. Finish or save any existing uncommitted work before copying the redesign. [GitHub's cloning instructions](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop).

## 4. Create a branch for the redesign

1. Click **Current branch → New branch**.
2. Name it `fuwari-redesign` and base it on `master`.
3. Click **Create branch**.

The branch name at the top should now read `fuwari-redesign`. Uploading this branch alone will not deploy the new website. [GitHub's branch instructions](https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop).

## 5. Copy the source files into the repository

1. Right-click `Chen-Muyang-Fuwari-source.zip` in File Explorer and choose **Extract All**.
2. Open the extracted folder until you can see `package.json`, `src`, and `public` together.
3. In GitHub Desktop, choose **Repository → Show in Explorer** to open the cloned repository.
4. Copy **the contents** of the extracted source folder into the cloned repository folder. Do not copy the outer `Chen-Muyang-Fuwari-source` folder itself.
5. If Windows asks about files with the same names, choose **Replace the files in the destination**. Merge matching folders.
6. Keep the existing `.git` folder and old Jekyll folders. There is no `.git` folder in the ZIP, so you are not replacing your repository history.

Check the result before continuing. These files must be at these locations relative to the cloned repository:

```text
Chen-Muyang.github.io/
  .github/workflows/pages.yml
  package.json
  pnpm-lock.yaml
  astro.config.mjs
  src/config.ts
  src/content/posts/
  src/content/notes/
  src/content/publications/
  public/files/Defense.pdf
```

If instead you see `Chen-Muyang.github.io/Chen-Muyang-Fuwari-source/package.json`, the files are one folder too deep. Move the extracted folder's contents up to the repository root. Enable **View → Show → Hidden items** in Explorer if you cannot see `.github`. Do not upload the ZIP file itself.

## 6. Save and upload the branch

1. Return to Desktop. The **Changes** tab should show many new files and a few modified files.
2. Confirm the files above are included. `node_modules`, `dist`, and `.astro` should not be listed.
3. In the **Summary** box at the lower left, enter `Upgrade website to Fuwari and fix publication PDFs`.
4. Click **Commit to fuwari-redesign**.
5. Click **Publish branch** at the top. If the branch was already published, the button will say **Push origin**.

Committing is a local save; publishing/pushing sends it to GitHub. [GitHub's commit instructions](https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop).

## 7. Open a pull request and let GitHub check the build

1. In Desktop, choose **Preview Pull Request** or **Create Pull Request**. You can also visit [your repository](https://github.com/Chen-Muyang/Chen-Muyang.github.io), select `fuwari-redesign`, and use **Compare & pull request**.
2. Confirm **base: master** and **compare: fuwari-redesign**.
3. Give it the title `Upgrade website to Fuwari` and click **Create pull request**.
4. Wait for **Build and deploy Fuwari / build** to finish successfully. You can inspect it from the repository's **Actions** tab.

On a pull request, the workflow builds and checks the site but skips deployment. A green check means GitHub successfully installed dependencies, checked the source, built the search index, and verified the preserved routes and files. If it fails, open the failing run and its red step; fix that error before merging. [GitHub's pull-request instructions](https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request-from-github-desktop).

## 8. Tell GitHub Pages to use the new workflow

1. Open [repository Settings → Pages](https://github.com/Chen-Muyang/Chen-Muyang.github.io/settings/pages).
   Before changing it, note the current Source, branch, and folder so you can restore them if needed.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. The package already contains the required workflow at `.github/workflows/pages.yml`. You do not need to select or create another suggested workflow.

The old site used Jekyll. This redesign uses Astro, so this setting change is essential. Keep the repository name `Chen-Muyang.github.io`; the configuration is prepared for that root website address. [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 9. Merge and publish

1. Return to the pull request. After its build succeeds, click **Merge pull request**, then **Confirm merge**.
2. Open **Actions → Build and deploy Fuwari** and select the new run for `master`.
3. Wait for both **build** and **deploy** to be green. The deploy job provides the live website link.
4. Visit [your website](https://chen-muyang.github.io/). If you still see the old design, press **Ctrl + F5** or open a private browser window.
5. Verify **Publications** shows the thesis with **Paper (PDF)** and **Slides (PDF)**. Also open **Notes**, **Blog Posts**, and **CV**.

Back in Desktop, switch to `master`, click **Fetch origin**, and then **Pull origin**. Your computer now has the published version. Later edits pushed to `master` will automatically run this workflow again.

## Troubleshooting

| What you see | What to check |
| --- | --- |
| There is no Fuwari workflow in Actions | Confirm `.github/workflows/pages.yml` was copied and committed. Check the branch in GitHub. |
| Only the old Jekyll workflow runs | Set Pages **Source** to **GitHub Actions**, and ensure the redesign has reached `master`. |
| Pull request is green but the live site is unchanged | A pull request does not deploy. Merge it into `master`, then wait for the deploy job. |
| `package.json` or lockfile is missing | The extracted package may be nested one folder too deep. Compare with the folder tree in Step 5. |
| Deployment says Pages is not configured | Check Step 8 and your permission to administer this repository. |
| Actions are disabled by an organization policy | Ask the repository/organization administrator to allow this workflow. Do not remove policy protections. |
| A photo or PDF returns 404 | File names are case-sensitive online. Match `public/files/Example.pdf` with `/files/Example.pdf`. |
| A check fails after editing Markdown | Check the lines between the opening and closing `---`; dates and indentation matter. The error log names the file. |

The provided workflow targets `master`. If you intentionally rename that branch, also update the branch names and deploy condition in `.github/workflows/pages.yml`.

## If you want to undo publication

Before merging, you can simply leave the pull request unmerged. After merging, GitHub's pull-request page can offer **Revert** to create a new pull request that reverses the merge. Review and merge that reversal. Returning fully to the former Jekyll site also requires restoring Pages **Source**, branch, and folder to the settings you recorded in Step 8. Keep the old content folders until you are comfortable with the migration.

For everyday changes after publishing, read [UPDATE-YOUR-WEBSITE.md](UPDATE-YOUR-WEBSITE.md). For the photo replacement map, read [CUSTOMIZE.md](CUSTOMIZE.md).
