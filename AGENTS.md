# Repository Guidelines

This repository contains a personal site built with Jekyll and Markdown. Use this guide when editing content, layouts, or automation scripts.

## Project Structure & Module Organization

- Root pages live in `index.md`, `404.md`, and `resume.md`.
- Blog posts go in `_posts/` using `YYYY-MM-DD-title.md` naming.
- Layouts and shared HTML/Liquid live in `_layouts/` and `_includes/`.
- Static assets (CSS, JS, images, fonts) belong in `assets/`.
- The generated site output is `_site/` (do not edit by hand).

## Build, Test, and Development Commands

- `bundle exec jekyll serve` – run the site locally with live reload.
- `bundle exec jekyll build` – produce a production build into `_site/`.
- `bundle exec jekyll doctor` – basic sanity checks for common issues.
- `./quick_update.zsh` – helper script for frequent content updates (read it before modifying).

## Coding Style & Naming Conventions

- Prefer Markdown (`.md`) for content; use front matter (`---`) on all pages and posts.
- Use 2-space indentation in HTML, Liquid, YAML, and shell scripts.
- Keep Liquid tags simple and readable; avoid complex logic in templates.
- Name CSS and asset files descriptively (e.g., `assets/css/site.css`).

## Testing Guidelines

- After changes, run `bundle exec jekyll build` and scan the console for warnings.
- Open the local site in multiple viewports to check layout and navigation.
- Verify internal links and images manually on changed pages.

## Commit & Pull Request Guidelines

- Use concise, imperative commit messages (e.g., `Add post on Jekyll tips`).
- Group related edits (content, layout, config) into a single logical commit.
- For pull requests, describe the change, list key files touched, and include screenshots or URLs for visual changes when possible.

