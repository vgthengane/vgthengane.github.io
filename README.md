# Vishal Thengane - Academic Homepage

Personal academic website built with Jekyll.

Base theme/inspiration: [AcadHomepage by RayeRen](https://rayeren.github.io/acad-homepage.github.io/)

## Sections

- About: [_pages/about.md](_pages/about.md)
- News: [_pages/news.md](_pages/news.md)
- Publications: [_pages/publications.md](_pages/publications.md)
- Honors and Awards: [_pages/awards.md](_pages/awards.md)
- Education: [_pages/educations.md](_pages/educations.md)

## Local Development

Prerequisites:

- Ruby and Bundler installed
- Gems installed with `bundle install`

Build once:

```bash
bundle exec jekyll build
```

Run locally:

```bash
bundle exec jekyll serve
```

Then open:

- `http://127.0.0.1:4000`

## Local Server for Phone Testing

Use these steps to preview the site on your phone.

1. Connect phone and laptop to the same Wi-Fi network.
2. Start Jekyll so it listens on all network interfaces:

```bash
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

3. Find your laptop IP address:

```bash
ipconfig getifaddr en0 || ipconfig getifaddr en1
```

4. Open this URL on your phone browser:

- `http://<YOUR_LAPTOP_IP>:4000`
- Example: `http://192.168.8.130:4000`

If you are opening the site on the Mac itself, use:

- `http://127.0.0.1:4000`

Important:

- Do not use `http://127.0.0.1:4000` on the phone. That points to the phone itself, not your laptop.
- On Safari for macOS, `http://127.0.0.1:4000` can fail if HTTPS-Only is enabled.
- If Safari shows an HTTPS-Only error, temporarily disable HTTPS-Only for the local address or use a browser that allows local HTTP previews.

Quick troubleshooting:

- Keep the Jekyll terminal running while testing.
- If it does not open, check macOS firewall permissions for Terminal/Ruby.
- If your router has AP isolation or guest Wi-Fi mode, disable it or use the main Wi-Fi.

## Notes

- Use `bundle exec jekyll serve` directly for local development.
- This repository does not use a helper run script.

## License

This website is open source under the [MIT License](LICENSE).

It is adapted from [AcadHomepage by RayeRen](https://github.com/RayeRen/acad-homepage.github.io) with substantial structural and content changes.

Original copyright: Yi Ren.
Modifications in this repository: Vishal Thengane.