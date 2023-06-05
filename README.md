# NEXUS LANDING PAGE GUIDE

## Intro

This `readme.md` file should serve as a helping hand in using/editing the page, you will find guide, tags/points that should lead you to the stuff you want to edit in/out, such as contents, styles, or javascript functions.

### General Guideline

This page serves as a **static** site, anything that is visually visible exists in the `index.html` file, most styles should exists in a separate css file, other than some inline stylings used to color some word.

-   index.html

> public

-- breakpoints.css (@import main.css here)

-- main.css (root styles)

-- nav.css (navigation menu related styles)

-- nav.js (navigation menu related functions/interactions)

Two externally hosted contents are **iconify** and **montserrat** font, please note upon hosting make sure both this cdn are accessible by your site, both are free for use.

Search Icons you want to use [here (Iconify Icon Set)](https://icon-sets.iconify.design/)

# Styles

Sections contains wrapper with each its sections names since each is different

-   menu / nav
-   hero
-   embark
-   reason
-   detail (about us)
-   persuasion
-   workpace
-   contact

With general css principle

if its a flex
Wrapper > inner flex container > flex-item

if its a grid
Wrapper > grid-container > grid-item(cols, rows)

for typography font sizes are differentiated as TItle and Subtitle, generally its written as ".Wrapper .Title" so each section can have their own title styles and subtitles, same applies to flex and grid items, both have their own Title and Subtitle classes as well ".{flex-name} .Title" "grid-item .Title", etc. So any class selectors that contains that, should affect typography

for images, some are sized to contain its aspect ratio, most are cover, change as needed as each breakpoint are adjusted per design

# Breakpoints

As stated on General Guideline, breakpoints take precedence after main.css any changes thats done on main.css will reflect on every breakpoint IF it wasnt overridden in the first place, design is done desktop-first, but adapted to mobile so the main.css will mostly apply to desktops and any minor changes to mobile should be done inside its breakpoints. The current used values are

`screen width <= 720px (small phones)`
`screen width <= 767px (common modern phones)`
`screen width <= 900px (tablets, ipads)`
more than it are considered `desktop` styling, but the breakpoint is provided if any changes exclusive to `desktop` can be made here.

note that the mobile breakpoints are oriented `portrait`, this will result in mobile phone accessing the site in `landscape` would mostly fall-back to `tablet` styling, which mostly are okay.

# Content

Text content are stored in `locale.js`, each id are placed on title and subtitles in each items, changes done to strings here will render on the page, this is done so its not as confusing to change each text

\*menu / nav is hard-coded

# Image Sources

Same as text. all image sources are stored in `locale.js` you can change its source by replacing the string here. You can apply the image stored here to by adding `className` on the img element you want to put the image in, currently all images are self-hosted, you can do the same or just use URL-links from web, be sure to check if the link is accessible cross-site

To self-host just put your image on public/media and use relative path

\*some that are hardcoded

-   the background-image at `.embark .banner > .decorations ` in `main.css`
