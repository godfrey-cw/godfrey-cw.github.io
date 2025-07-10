# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal academic website for Charles Godfrey. The site showcases research publications, academic background, and serves as a professional portfolio. It uses the Minima theme and includes automatic deployment capabilities.

## Architecture

- **Jekyll Static Site Generator**: Uses `jekyll/minima` remote theme with custom configuration
- **Content Structure**: 
  - Main pages: `index.md` (home), `resume.md` (redirects to PDF)
  - Assets: PDFs in `assets/pdfs/`, JavaScript in `assets/js/`
  - Built site outputs to `_site/` directory
- **Deployment**: Automated via `quick_update.zsh` script that builds, commits, and syncs to deployment repository

## Common Commands

### Build and Development
```bash
# Build the Jekyll site
jekyll build

# Serve locally for development (if jekyll serve is available)
jekyll serve
```

### Deployment
```bash
# Full update and deployment process
./quick_update.zsh
```

This script:
1. Builds the Jekyll site
2. Commits changes to git with auto-commit message
3. Pushes to repository
4. Syncs built site to deployment repository at `/home/charlie/Documents/godfrey-cw.github.io`

### Git Operations
The repository uses automated commits via the update script. Manual git operations follow standard patterns:
```bash
git add .
git commit -m "descriptive message"
git push
```

## Key Configuration

- **_config.yml**: Main Jekyll configuration with theme settings, social links, and build parameters
- **Theme**: Uses `jekyll/minima` with auto skin and custom social links (Google Scholar, GitHub, LinkedIn)
- **Plugins**: Includes jekyll-feed, jekyll-sitemap, jekyll-seo-tag, jekyll-redirect-from, jekyll-remote-theme

## Content Management

- **Publications**: Academic publications are embedded directly in `index.md` with proper formatting and links
- **Resume**: Handled as a redirect to PDF in `assets/pdfs/godfrey-resume.pdf`
- **MathJax**: Configured for mathematical notation rendering via `assets/js/mathjax-config.js`

## File Structure Notes

- `_site/`: Generated Jekyll output (excluded from git)
- `assets/`: Source assets (images, JS, PDFs)
- `_includes/`, `_layouts/`, `_posts/`: Standard Jekyll directories (some may be empty, relying on theme defaults)
- `quick_update.zsh`: Deployment automation script