### Custom Helper Classes:
---

#### Browsers
##### Target IE
```css
.ie8  { /* rule for IE8 */  }
.ie9  { /* rule for IE9 */  }
.ie10 { /* rule for IE10*/ }
```

#### Positions
```html
<div class="pos-fxd"> ... </div>
<div class="pos-abs"> ... </div>
<div class="pos-rtv"> ... </div>
```
```css
.pos-fxd  { position: fixed;    }
.pos-abs  { position: absolute; }
.pos-rtv  { position: relative; }
```

#### Outer space with ( margin )
```html
<div class="m-10">   ... </div>
<div class="m-t10">  ... </div>
<div class="m-b10">  ... </div>
<div class="m-tb10"> ... </div>
```
```css
.m-10   { margin: 10px; }
.m-t10  { margin-top: 10px; }
.m-b10  { margin-bottom: 10px; }
.m-tb10 { 
  margin-top: 10px; 
  margin-bottom: 10px; 
  }
```

#### Inner space with ( padding )
```html
<div class="p-10">   ... </div>
<div class="p-t10">  ... </div>
<div class="p-b10">  ... </div>
<div class="p-tb10"> ... </div>
```
```css
.p-10   { padding: 10px; }
.p-t10  { padding-top: 10px; }
.p-b10  { padding-bottom: 10px; }
.p-tb10 { 
  padding-top: 10px; 
  padding-bottom: 10px; 
  }
```

--
### [Bootstrap Helper classes v3.0.2](http://getbootstrap.com/css/#helper-classes)
---

#### Quick floats
```html
<div class="pull-left">   ... </div>
<div class="pull-right">  ... </div>
```
```css
.pull-left  { float: left !important; }
.pull-right { float: right !important; }
```

#### Center content blocks
```html
<div class="center-block">   ... </div>
<div class="pull-right">  ... </div>
```
```css
.center-block { 
  display: block; 
  margin-left: auto; 
  margin-right: auto; 
}
```

#### Showing and hiding content
```html
<div class="show">   ... </div>
<div class="hidden">  ... </div>
```
```css
.show   { display: block !important;}
.hidden { 
  display: none !important; 
  visibility: hidden !important; 
}
```

> Furthermore, `.invisible` can be used to toggle only the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document.

```html
<div class="invisible"> ... </div>
```
```css
.invisible { visibility: hidden; }
```
### Responsive utilities

|  Class        | <768px      | ≥768px        | ≥992px       | ≥1200px     |
| --------------|:-----------:| -------------:| ------------:| -----------:|
| .visible-xs   | **Visible** |  Hidden       | Hidden       | Hidden      |
| .visible-sm   | Hidden      |  **Visible**  | Hidden       | Hidden      |
| .visible-md   | Hidden      |  Hidden       | **Visible**  | Hidden      |
| .visible-lg   | Hidden      |  Hidden       | Hidden       | **Visible** |
| .hidden-xs    | Hidden      |  **Visible**  | **Visible**  | **Visible** |
| .hidden-sm    | **Visible** |  Hidden       | **Visible**  | **Visible** |
| .hidden-md    | **Visible** |  **Visible**  | Hidden       | **Visible** |
| .hidden-lg    | **Visible** |  **Visible**  | **Visible**  | Hidden      |


#### Print classes
|  Class         | Browser     | Print       |
| ---------------|:-----------:| ------------|
| .visible-print | Hidden      | **Visible** |
| .hidden-print  | **Visible** | Hidden      |

