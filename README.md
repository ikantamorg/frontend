Front-end Template Starter v4
---

This project is a fast and clean starting point for front-end development projects.

## Getting Started
Download from one of the following options:

1. HTTPS clone URL ──  `git clone https://github.com/ikantam/frontend.git`.
2. SSH clone URL  ──   `git@github.com:ikantam/frontend.git`.
3. Download as .zip ── `https://github.com/ikantam/frontend/archive/master.zip`.


## Features

- Layout (Fixed, Responsive)
- Cross-browser compatible (IE8+, Chrome, Opera, Safari, Firefox).
- Compatible With [Bootstrap 3.1.1](http://getbootstrap.com/)
- [bootstrap-fileupload.min.js](http://jasny.github.io/bootstrap/javascript/#fileinput)
- [jQuery](http://jquery.com/) via [CDN](http://code.jquery.com/jquery.min.js), with a local fallback.
- [jQueryui](http://jqueryui.com/) via [CDN](http://code.jquery.com/ui/1.10.4/jquery-ui.min.js), with a local fallback.
- jQuery UI Themes *(jqueryui.scss)*
- [jQuery UI Touch Punch](http://touchpunch.furf.com/) *(small hack that enables the use of touch events)*
- Preprocessor (SCSS & Compass)
- [Sass snippets](doc/scss-snippets.md)
- [Reusable classes](doc/helper-classes.md)
- IE-specific classes for easier cross-browser control.

---


## Structure

```
frontend/
├── assets/
├──── css/
│    └── bootstrap/
│    └────── bootstrap.css
│    └── vendors/
│    └────── jqueryui.css
│    ├── ikantam.css
│    └── main.css
├──── js/
│    └── vendors/
│    ├── jquery-ui.min.js
│    └────── jquery.min.js
│    ├── bootstrap-fileupload.min.js
│    ├── bootstrap.min.js
│    ├── ikantam.js
│    └── jquery.ui.touch-punch.min.js
├──── media/
│    └── au/
│    └── images/
│    └── swf/
└──── sass/
      └── bootstrap/
      └────── *boostrap.scss
      └── framework/
      ├────── _all.scss
      ├────── _helpers.scss
      └────── _misc.scss
      └── modules/
      ├────── _all.scss
      ├────── _buttons.scss
      ├────── _icons.scss
      └────── _utility.scss
      └── partials/
      ├────── _base.scss
      ├────── _forms.scss
      └────── _typography.scss
      └── vendors/
      └────── _jquery-ui.scss
      ├── main.scss
      └── config.rb
```

## Usage:

### HTML Shortcodes
* [Layout](doc/layout.md)
* [Forms](doc/forms.md)

### CSS
* [CSS helpers](doc/helper-classes.md)

### Scss 
* [Usage](doc/scss-snippets.md)

### JS
* [Plugins & usage](doc/plugins.md)


## Contributors

- [@ElmahdiMahmoud](https://twitter.com/ElmahdiMahmoud)
- [http://www.ikantam.com/](http://www.ikantam.com/)