# EMO 2027 Conference Website

Official website for the 14th International Conference on Evolutionary Multi-Criterion Optimization (EMO 2027), hosted by the University of Exeter, UK.

**Live site:** <https://www.emo2027.org>

## Prerequisites

- **Ruby 3.3+** (recommended via Homebrew on macOS: `brew install ruby@3.3`)
- **Bundler** (`gem install bundler`)
- **Node.js** (optional, for CSS linting)

## Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/emo2027/emo2027.github.io.git
   cd emo2027.github.io
   ```

2. **Install dependencies**

   ```bash
   bundle install
   ```

3. **Run the local server**

   ```bash
   ./serve.sh
   ```

   Or manually:

   ```bash
   bundle exec jekyll serve
   ```

4. **View the site** at <http://localhost:4000>

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _data/               # Data files (YAML)
│   ├── conference.yml   # Core conference facts (dates, venue, contact, social)
│   ├── dates.yml        # Deadlines and countdown items
│   ├── navigation.yml   # Navigation menu structure
│   ├── organizers.yml   # Committee members
│   ├── schedule.yml     # Programme schedule
│   ├── social_events.yml# Social events content
│   ├── sponsors.yml     # Sponsor information
│   └── topics.yml       # Call for Papers topics
├── _includes/           # Reusable HTML components
│   ├── header.html
│   ├── nav.html
│   ├── footer.html
│   ├── countdown.html
│   ├── event-jsonld.html
│   └── sponsors.html
├── _layouts/            # Page templates
│   ├── default.html     # Base layout
│   ├── page.html        # Standard page
│   └── program.html     # Programme page with schedule
├── assets/
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   ├── ics/             # Calendar exports (Liquid templates)
│   ├── js/
│   │   ├── dark-mode.js # Theme toggle
│   │   ├── external-links.js # Opens external links in new tab
│   │   ├── schedule.js  # Programme filtering
│   │   ├── search.js    # Site search
│   │   └── vendor/      # Third-party libraries (lunr)
│   └── images/          # Logos, banner, etc.
├── pages/               # Content pages (Markdown)
│   ├── accommodation.md
│   ├── awards.md
│   ├── at-a-glance.md
│   ├── calls.md
│   ├── local-info.md
│   ├── organizers.md
│   ├── program.md
│   ├── registration.md
│   ├── social-events.md
│   └── venue.md
├── index.md             # Homepage
└── search.json          # Search index template
```

## Development

### Adding/Editing Pages

Pages are written in Markdown with YAML front matter:

```markdown
---
layout: page
title: Page Title
permalink: /page-url/
description: Brief description for SEO.
---

Page content here...
```

### Updating Navigation

Edit `_data/navigation.yml` to add or modify menu items. The footer "Contact" link is rendered from `site.data.conference.contact.email` using `type: contact_email`.

### Updating Important Dates

Edit `_data/dates.yml` to update conference deadlines shown on the homepage and used in the Calls/Registration/Awards pages. Use flags:

- `include_in_countdown`: show on the homepage countdown
- `include_in_calls`: show in the Calls page
- `include_in_registration`: show in the Registration page
- `include_in_calendar`: include in the deadlines ICS file

### Updating Programme Schedule

Edit `_data/schedule.yml` to update the programme schedule. The programme page and social event dates pull from this file (via matching `id` fields).

### Updating Committee Members

Edit `_data/organizers.yml` to add or update committee members.

### Updating Conference Facts

Edit `_data/conference.yml` to update core facts (dates, venue, contact email, location, social links). These values are reused across pages, JSON-LD, the footer, and the ICS calendar export.

### Updating Call for Papers Topics

Edit `_data/topics.yml` to update the research topics shown on the Calls page.

### Updating Social Events

Edit `_data/social_events.yml` for the social events page. Event dates/times are taken from `_data/schedule.yml` via matching `id` fields.

### Search and External Links

- Site search uses `search.json` and a local Lunr build in `assets/js/vendor/`.
- External links are automatically opened in a new tab via `assets/js/external-links.js`.

### Styling

The site uses CSS custom properties (variables) defined in `assets/css/style.css`. Key variables:

```css
--color-primary: #003c3c; /* Exeter dark green */
--color-accent: #00a896; /* Exeter teal */
--color-bg: #ffffff; /* Background */
--color-text: #1c1b4b; /* Text colour */
```

Dark mode is supported via the `[data-theme="dark"]` selector.

## Linting

### Markdown

```bash
mdl pages/ index.md
```

Install: `gem install mdl`

### CSS

```bash
npx stylelint "assets/css/**/*.css"
```

### HTML Validation

```bash
bundle exec htmlproofer _site --disable-external --allow-hash-href
```

Install: `gem install html-proofer`

## Building for Production

```bash
bundle exec jekyll build
```

The built site will be in the `_site/` directory.

## Calendar Exports (ICS)

The ICS files in `assets/ics/` are Liquid templates. They are rendered during the Jekyll build and pull data from `_data/conference.yml` and `_data/dates.yml`.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## Browser Support

The site supports all modern browsers and includes:

- Responsive design (mobile-first)
- Dark mode (respects system preference)
- Accessible navigation
- Print styles

## Outstanding Tasks

See [TODO.md](TODO.md) for a list of content and features that still need to be completed.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linters to check for issues
4. Test locally with `./serve.sh`
5. Submit a pull request

## Contact

- **General enquiries:** <TBD@exeter.ac.uk> (maintained in `_data/conference.yml` → `contact.email`)
- **Website issues:** <g.de.ath@exeter.ac.uk>

## License

Content © 2025 EMO 2027 Organizing Committee. All rights reserved.
