## Layout

Layout used to handle the block structure. There's no fixed `width` for this layout structure.
You may need to check the [Bootstrap grid system](http://getbootstrap.com/css/#grid-example-basic).

### Single Layout
```html
<div class="layout">
  <div class="main">
    ...
  </div>
</div>
```


### 2 columns Layout

#### Left main column with right sidebar
```html
<div class="layout main-sidebar">
  <!-- ======[ main ]====== -->
  <div class="main">
    left column
  </div>
  <!-- ======[ main ]====== -->

  <!-- ======[ sidebar ]====== -->
  <aside class="sidebar">
    right column
  </aside>
  <!-- ======[ sidebar ]====== -->
</div>
```

#### Right main column with left sidebar
```html
<div class="layout sidebar-main">
  <!-- ======[ main ]====== -->
  <div class="main">
    right column
  </div>
  <!-- ======[ main ]====== -->

  <!-- ======[ sidebar ]====== -->
  <aside class="sidebar">
    left column
  </aside>
  <!-- ======[ sidebar ]====== -->
</div>
```


### 3 columns Layout

#### Left sidebar with center main columns and right sidebar
```html
<div class="layout sidebar-main-sidebar">
  <!-- ======[ sidebar ]====== -->
  <aside class="sidebar">
    left column
  </aside>
  <!-- ======[ sidebar ]====== -->

  <!-- ======[ main ]====== -->
  <div class="main">
    center column
  </div>
  <!-- ======[ main ]====== -->

  <!-- ======[ sidebar ]====== -->
  <aside class="sidebar">
    right column
  </aside>
  <!-- ======[ sidebar ]====== -->
</div>
```