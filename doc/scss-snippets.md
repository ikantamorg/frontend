### Scss Snippets
---

#### Mixins Usage

##### Transparent Background

```scss
.bg-alpha { @include bgAlpha(#000, .7); }

// -------------------

.bg-alpha-2 { @include bgAlpha(#000, 0); }
```
Transparent Background CSS Output
```css
.bg-alpha {
  background-color: transparent;
  background-color: rgba(0, 0, 0, 0.7);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#B3000000,endColorstr=#B3000000);
  zoom: 1;
}
/* ------------------- */
.bg-alpha-2 {
  background-color: transparent;
  background-color: rgba(0, 0, 0, 0);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00000000,endColorstr=#00000000);
  zoom: 1;
}
```

##### Keyframes

```scss
@include keyframes(name) {
  from { left: 230px; }
  to   { left: 200px; }
}
```
> Usage @include vendorize(animation, shake 1s ease forwards);

Keyframes CSS Output

```css
@-webkit-keyframes name {
  from { left: 230px; }
  to   { left: 200px; }
}

@-moz-keyframes name {
  from { left: 230px; }
  to   { left: 200px; }
}

@-ms-keyframes name {
  from { left: 230px; }
  to   { left: 200px; }
}

@keyframes name {
  from { left: 230px; }
  to   { left: 200px; }
}
```

##### Rounded block

```scss
.rounded-block { @include circle(30px); }
```

Rounded block CSS Output

```css
.rounded-block {
  width: 30px;
  height: 30px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  overflow: hidden;
}
```

##### Calculation

###### Addition
```scss
.addition { left: calc-addPixels(10px, 10px); }
```
Addition CSS Output

```css
.addition {
  left: 20px;
}
```

###### Subtraction

```scss
$blockPadding: 20px;
.subtraction { width: calc-subPixels(300px, $blockPadding); }
```
Subtraction CSS Output

```css
.subtraction {
  width: 280px;
}
```

###### Division

```scss
$total: 10;
.division { width: calc-divPixels(500px, $total); }
```
Division CSS Output

```css
.division {
  width: 50px;
}
```

###### Percentage

```scss
$percentage: 100;
.percentage { width: calc-percent(40, $percentage); }
```
Percentage CSS Output

```css
.percentage {
  width: 40%;
}
```

##### Breakpoints

```scss
.reponsive {

  // large-screen = 1200 and above  
  @include breakpoint(large-screen) { color: red; }

  // desktop = 1200 and below
  @include breakpoint(desktop)      { color: blue; }

  // mid-devices = 998px and below
  @include breakpoint(mid-devices)  { color: green; }

  // tablet = 768px and below
  @include breakpoint(tablet)       { color: white; }

  // mobile = 480 and below
  @include breakpoint(mobile)       { color: brown; }

}
```
Breakpoints CSS Output

```css
@media (min-width: 1200px) {
  .reponsive {
    color: red;
  }
}
@media (max-width: 1200px) {
  .reponsive {
    color: blue;
  }
}
@media (max-width: 998px) {
  .reponsive {
    color: green;
  }
}
@media (max-width: 768px) {
  .reponsive {
    color: white;
  }
}
@media (max-width: 480px) {
  .reponsive {
    color: brown;
  }
}
```

##### Absolute positioned

```scss
//                         (top , right, btm, left)
.pos-abs { @include abs-pos(10px, auto ,12px, 10px); }
```
Absolute positioned CSS Output
```css
.pos-abs {
  top: 10px;
  right: auto;
  bottom: 12px;
  left: 10px;
  position: absolute;
}
```
##### Triangle

```scss
/* up */
.up-triangle     { @include triangle(up, #000, 7px);    }
/* right */
.right-triangle  { @include triangle(right, #000, 7px); }
/* down */
.down-triangle   { @include triangle(down, #000, 7px);  }
/* left */
.left-triangle   { @include triangle(left, #000, 7px);  }
```
Triangle CSS Output

```css
/* up */
.up-triangle {
  border-bottom: 7px solid black;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  height: 0;
  width: 0;
}

/* right */
.right-triangle {
  border-bottom: 7px solid transparent;
  border-left: 7px solid black;
  border-top: 7px solid transparent;
  height: 0;
  width: 0;
}

/* down */
.down-triangle {
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  border-top: 7px solid black;
  height: 0;
  width: 0;
}

/* left */
.left-triangle {
  border-bottom: 7px solid transparent;
  border-right: 7px solid black;
  border-top: 7px solid transparent;
  height: 0;
  width: 0;
}
```

##### Cross all headings, h1-h6

```scss
#{headings()} { font-weight: 700; }
```
Cross all headings, h1-h6 CSS Output

```css
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
}
```

#### Placeholders ( @extends ) 

> Parent should have fixed width!

##### Truncate text

```scss
.truncate-text {
  @include text-truncate(300px);
}
```
Truncate text CSS Output
```css
.truncate-text {
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

```