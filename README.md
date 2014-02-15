Front-end Template Starter v4
---

This project is a fast and clean starting point for front-end development projects.

### Contributors:
* [@ElmahdiMahmoud](https://twitter.com/ElmahdiMahmoud). 
* [http://www.ikantam.com/](http://www.ikantam.com/).


## Getting Started
Download from one of the following options:

1. HTTPS clone URL ──  `git clone https://github.com/ikantam/frontend.git`.
2. SSH clone URL  ──  `git@github.com:ikantam/frontend.git`.
3. Download as .zip ── `https://github.com/ikantam/frontend/archive/master.zip`.

## License
MIT License

### Features

- Cross-browser compatible (IE8+, Chrome, Opera, Safari, Firefox).
- Compatible With [Bootstrap 3.1.1](http://getbootstrap.com/)
- Layout (Fixed, Responsive)
- [jQuery](http://jquery.com/) via [CDN](http://code.jquery.com/jquery.min.js), with a local fallback.
- [jQueryui](http://jqueryui.com/) via [CDN](http://code.jquery.com/ui/1.10.4/jquery-ui.min.js), with a local fallback.
- IE-specific classes for easier cross-browser control.
- [Sass snippets](doc/scss-snippets.md)
- [Reusable classes](doc/helper-classes.md)
- [bootstrap-fileupload.min.js](http://jasny.github.io/bootstrap/javascript/#fileinput)
- [jQuery UI Touch Punch](http://touchpunch.furf.com/) *(small hack that enables the use of touch events)*
- Preprocessor (SCSS & Compass)
- jqueryui.scss
---


### Structure

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

#### HTML Shortcodes
* [Layout](doc/layout.md)
* [Forms](doc/forms.md)

#### CSS
* [CSS helpers](https://github.com/ikantam/frontend/blob/master/doc/helper-classes.md)

#### Scss 
* [Usage](https://github.com/ikantam/frontend/blob/master/doc/scss-snippets.md)

#### JS
* [Plugins & usage](https://github.com/ikantam/frontend/blob/master/doc/plugins.md)
