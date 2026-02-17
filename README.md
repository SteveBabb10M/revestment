# Revestment 1765

The companion website to *Revestment: The Crime of Crown Dependence* — the story of what Parliament did to the Isle of Man.

**Live site:** [revestment1765.com](https://revestment1765.com)

## About

In 1765, the British Parliament purchased the Isle of Man from the Duke of Atholl. For the Manx people, it meant the destruction of their economy, a century of emigration, and a constitutional relationship that stripped them of self-governance for generations.

This website provides:
- **Endnotes** — the scholarly apparatus behind the book
- **Primary sources** — transcriptions and links to documentary evidence  
- **Teaching materials** — resources for Manx schools and families
- **Gallery** — photographs from Tynwald Day

## Structure

```
/
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page templates
├── _includes/           # Header, footer components
├── _sass/               # Stylesheets (Sass)
├── assets/
│   ├── css/             # Compiled CSS
│   ├── images/          # Site images and gallery
│   └── js/              # JavaScript
├── pages/
│   ├── about/           # Book and author info
│   ├── endnotes/        # Chapter-by-chapter endnotes
│   ├── sources/         # Primary source collections
│   ├── teaching/        # KS2 and KS3 materials
│   ├── gallery/         # Tynwald photographs
│   └── resources/       # External links
└── index.html           # Homepage
```

## Local Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Site will be available at http://localhost:4000
```

## Deployment

The site is hosted on GitHub Pages. Push to the `main` branch to deploy.

DNS for `revestment1765.com` should point to GitHub Pages:
- A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- Or CNAME: `yourusername.github.io`

## Licence

Content © Steve Babb. Teaching materials may be used freely for educational purposes with attribution.

## Acknowledgements

- Frances Coakley and the Manx Notebook
- Manx National Heritage
- Culture Vannin
- The National Archives, Kew

*Quocunque Jeceris Stabit* — Whichever way you throw me, I will stand.
