Placeholder
===========

## HTML5 Placeholder Feature Like `Chrome` support in older browser

### Example Usage

Use the plugin as follows:

#### js

```js
$('input').placeholder();
```

#### CSS

The plugin automatically adds `class="placeholder"` to the placeholder text and adds `class="placeholder-wrapper" to the element parent who created by plugin`. 
You should set css style make it work, like:

```css
.placeholder-wrapper {
   position: relative;
   display: inline-block;
}
.placeholder {
   position: absolute;
   left: 0;
   top: 0;
   padding: 7px, 4px;
   color: #aaa;
   cursor: text;
}
```

I’d suggest sticking to the `#aaa` color for placeholder text, as it’s the default in most browsers that support `@placeholder`. 
If you really want to, though, you can [style the placeholder text in some of the browsers that natively support it](http://stackoverflow.com/questions/2610497/change-an-inputs-html5-placeholder-color-with-css/2610741#2610741).

### Notes

if you use `<input>` element, you should set `id`, like

    ```html
    <input id="username" type="email" name="username" placeholder="username">
    ```

The `<label>` who the plugin created will always point to the `<input>` element, and the `<input>` element will focus when you click.

### License

This plugin is available under [the MIT license].
