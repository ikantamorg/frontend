## Layout

Layout used to handle the way of how to handle structure layout. Its doesn't contain any fixed `width` it's just organized by using `float`.
You may need to check [Bootstrap grid system](http://getbootstrap.com/css/#grid-example-basic).

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