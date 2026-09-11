# hosseinhejazian.github.io

Personal academic website for Hossein Hejazian — <https://hosseinhejazian.github.io>

A small, self-contained [Jekyll](https://jekyllrb.com/) site with a custom theme.
No third-party template, no external CSS or font CDN, nothing to pay for: it is
built and served free by GitHub Pages.

---

## 1. Getting the site online

The site will not appear until **GitHub Pages is switched on for this
repository** — that is the one step that has to be done in the GitHub web UI.

1. Go to **Settings → Pages** (<https://github.com/hosseinhejazian/hosseinhejazian.github.io/settings/pages>).
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
   The workflow in `.github/workflows/pages.yml` takes it from there and
   redeploys on every push to `master`.
3. Wait for the run in the **Actions** tab to go green, then open
   <https://hosseinhejazian.github.io>. The first deploy usually takes a
   minute or two; DNS/CDN propagation can add a few more.

**Choosing "Deploy from a branch" (`master` / `/root`) instead also works** —
the site is written to build identically either way. GitHub Actions is
preferred only because a failed build shows up as a red ✗ in the Actions tab
instead of arriving as an email.

> **Keep the repository public.** On a free GitHub plan, Pages only publishes
> from public repositories. Making this repository private takes the site
> offline again — that is what happened before.

## 2. Editing the content

Almost everything lives in **`_data/`** as plain YAML lists. Add an entry, commit,
and the page rebuilds itself — no HTML or CSS to touch.

| What you want to change | File |
| --- | --- |
| Papers, papers under review | `_data/publications.yml` |
| Talks, presentations, session chair roles | `_data/talks.yml` |
| Courses | `_data/teaching.yml` |
| Honours and awards | `_data/awards.yml` |
| Research-interest tags | `_data/interests.yml` |
| Position / education on the CV page | `_data/cv.yml` |
| Email, Scholar, LinkedIn, GitHub links | `_data/links.yml` |
| The menu across the top | `_data/nav.yml` |

Each file starts with a comment block explaining its fields. Two conventions
worth knowing:

- **Your own name is bolded automatically** anywhere `Hejazian, H.` appears in
  an author list. That string is set as `self_name` in `_config.yml`.
- **To hide something without losing it**, comment its lines out with `#`.
  The working papers, the work-in-progress list, and the teaching-assistant
  history from the previous site are all parked that way at the bottom of their
  data files, ready to be uncommented.

Prose — the paragraphs under each page title — lives in **`_pages/`**:

| Page | File |
| --- | --- |
| Home (bio, research statement) | `_pages/index.md` |
| Research | `_pages/research.md` |
| Teaching | `_pages/teaching.md` |
| Talks | `_pages/talks.md` |
| CV | `_pages/cv.md` |

Site-wide settings — title, description, the CV link, the Google Analytics ID —
are in **`_config.yml`**.

### Replacing the CV

The **Curriculum Vitae** button points at `cv_url` in `_config.yml`, currently a
Dropbox link. To serve the PDF from the site itself instead, drop the file into
`files/` and set:

```yaml
cv_url: "/files/CV.pdf"
```

### Replacing the photo

Overwrite `assets/img/profile.jpg` (square, 400 × 400 or larger). The social
preview card at `assets/img/og-card.png` — the image that shows when the site is
shared on LinkedIn or in a message — contains the same photo and would need
regenerating to match.

## 3. Previewing locally (optional)

Not required — you can edit files straight on github.com and let the Actions
workflow build the site. But to see changes before pushing:

```bash
bundle install
bundle exec jekyll serve
# → http://127.0.0.1:4000
```

`bundle install` needs Ruby. The `github-pages` gem in the `Gemfile` pins Jekyll
and every plugin to the versions GitHub Pages itself runs, so the local preview
matches what gets deployed.

## 4. How it is put together

```
_config.yml            site settings
_data/                 all the content lists (see the table above)
_pages/                one Markdown file per page
_layouts/              default.html, page.html, home.html
_includes/             header, footer, icons, and the list renderers
_sass/                 _tokens (colours & type), _base, _layout, _components, _print
assets/
  css/main.scss        imports the partials above
  js/site.js           light/dark toggle
  fonts/               Inter + Newsreader, self-hosted (no font CDN)
  img/                 portrait and social card
files/                 PDFs
.github/workflows/     the Pages build
```

Notes on the theme:

- **Colours** are CSS custom properties defined once in `_sass/_tokens.scss`.
  Light and dark palettes are declared there and nowhere else, so retuning the
  site means editing that one file.
- **Dark mode** follows the reader's system setting; the ◐ button in the header
  overrides it and remembers the choice.
- **Fonts are self-hosted** in `assets/fonts/`, so the site makes no
  third-party requests and renders the same everywhere.
- The site **prints cleanly** — `_sass/_print.scss` drops the navigation and
  chrome and expands link URLs.

## Licence

Site content © Hossein Hejazian. The theme code is MIT licensed — see `LICENSE`.
