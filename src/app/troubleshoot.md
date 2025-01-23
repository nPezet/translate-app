# Encountered issues

## Place Submit button at the bottom of /new_word page keeping Input in the center of the page

```html
<div class="flexbox">
  <div class="center-items">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
  </div>
  <div class="item last-item">Item 3</div>
</div>
```

```css
.flexbox {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Par exemple, pour simuler une hauteur de conteneur */
}

.center-items {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre les items sur l'axe vertical */
  flex-grow: 1; /* Prend tout l'espace disponible */
}

.last-item {
  margin-top: auto; /* Place cet élément en bas de la flexbox */
}
```

> Nested Flexbox :
>
> - The .centre-items class contains the elements you want to centre. By using flex-grow: 1, this section takes up all the space available vertically to allow centring.
> - margin-top: auto on the last element:
> This pushes the last element down, taking up the remaining available space under .centre-items.

## Use useState hook on main Layout component rendering metadata is not allowed