# 📘 Project Structure — Jekyll Academic Website

## 📁 _data
- Stores reusable structured data in `.yml` format.
- Example: sidebar content, profile sections, or external links.
- Accessed via `site.data.filename.key`.

---

## 📁 _includes
- Contains HTML partials that can be reused across pages.
- Typical files: `head.html`, `header.html`, `footer.html`.
- Used in layouts via `{% include filename.html %}`.

---

## 📁 _layouts
- Holds layout templates for pages (e.g., `default.html`, `post.html`).
- Controls overall HTML structure using includes and Liquid variables.
- Pages use these via `layout: default` in front matter.

---

## 📁 _pages
- Custom pages like `about.md`, `publications.md`, `cv.md`.
- These are rendered using layouts and appear as menu items.

---

## 📁 _sass
- Contains modular SCSS (CSS preprocessor) stylesheets.
- Typically imported into a master SCSS file like `main.scss`.
- Allows you to override or extend theme styles (e.g., fonts, colours).

---

## 📁 _site
- ⚠️ This is the auto-generated output folder by Jekyll.
- Never edit anything inside this folder.
- It’s where the compiled HTML/CSS/JS lives after build (`jekyll build` or `jekyll serve`).

---

## 📁 .github
- Stores GitHub-specific files like issue templates, workflows (CI/CD).
- Mostly optional unless using automation or actions.

---

## 📁 assets
- Stores static files like SCSS, JS, fonts, and custom images.
- This is where `main.scss` usually lives (e.g., `assets/css/main.scss`).
- Good place to add custom JS or fonts.

---

## 📁 docs
- Optional folder, often used to store extra documentation or GitHub Pages site (alternative to `_site`).
- You might not need this unless documentation is being hosted.

---

## 📁 google_scholar_crawler
- Script or tool to scrape/update Google Scholar citation data.
- Used if you're auto-updating stats like citation count on the homepage.

---

## 📁 images
- Stores your image files like profile pictures, publication thumbnails, etc.
- Use relative links like `images/paper_teaser.png`.

---

## 🔧 _config.yml
- The main configuration file for your site.
- Contains site-wide settings: title, author info, plugins, markdown settings, etc.
- Changing this requires restarting `jekyll serve`.

---

## 📄 Gemfile + Gemfile.lock
- Used by Bundler to manage Ruby gem dependencies.
- Lists all Jekyll plugins and theme dependencies.

---

## 📄 run_server.sh
- A custom shell script to launch your site locally.
- Likely runs `bundle exec jekyll serve` or similar.

---

## 📄 README.md
- Basic documentation about your repo (what it is, how to run it).
- Displayed by default on GitHub repo homepage.

---

## 📄 .gitignore
- Tells Git which files/folders **not** to track.
- E.g., `_site`, `.DS_Store`, `.env`, etc.

---

## 📄 .ruby-version
- Specifies which Ruby version to use for the project.
- Useful when using version managers like `rbenv` or `rvm`.

---

# ✅ Customisation Notes

### To change fonts:
- Add Google Fonts link in `_includes/head.html`
- Modify `assets/css/main.scss` or relevant file to change `font-family`

### To add pages:
- Add `.md` or `.html` files inside `_pages`
- Use YAML front matter like:
  ```yaml
  ---
  layout: default
  title: "My New Page"
  permalink: /mypage/
  ---


  # rbenv local 3.1.4

# ------------------------------------------------------------------------------
# 🛠 Fix for Jekyll Live Server: NoMethodError - undefined method `key?' for nil:NilClass
# ------------------------------------------------------------------------------
# ❌ Error Message:
# [2025-08-02] ERROR NoMethodError: undefined method `key?' for nil:NilClass
#     at: jekyll/commands/serve/servlet.rb line 191 in `conditionally_inject_charset`
#
# 📌 Cause:
# The variable `@mime_types_charset` is `nil`, so calling `.key?` on it raises an error.
#
# ✅ Fix:
# Edit the file:
# ~/.rbenv/versions/3.1.4/lib/ruby/gems/3.1.0/gems/jekyll-3.10.0/lib/jekyll/commands/serve/servlet.rb
#
# ✅ Replace this line:
#   return unless typ && @mime_types_charset.key?(typ)
#
# ✅ With this safer version:
#   return unless typ && @mime_types_charset && @mime_types_charset.key?(typ)
#
# This avoids calling `.key?` on a `nil` object.
#
# 🔁 Restart your server:
#   bundle exec jekyll serve
#
# 🧠 Tip:
# You may consider upgrading Jekyll or related gems to avoid such bugs in older versions.
# ------------------------------------------------------------------------------
