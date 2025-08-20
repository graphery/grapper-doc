# Manage elements


## *element*.add( *tagName* )

Creates and attach a nested SVG element and returns its Grapper wrapper object.

```js
const rect = parentElement.add('rect');
```


## *element*.remove()

Unlinks the object from the parent element.

```js
element.remove();
```


## *element*.querySelector( *selector* )

You can get the first nested element that maches with the selector as parameter.

```js
const lines = $.svg.querySelectorAll('line');
```


## *element*.querySelectorAll( *selector* )

You can get the All nested element that maches with the selector as parameter.

```js
const lines = $.svg.querySelectorAll('line');
```

## *element*.children()

Returns an array with all nested elements.

```js
for (let el of element.children()) {
  //...
}
```

## *element*.parent()

Returns the parent object or null if not exist.

```js
const g = line.parent();
```


## *element*.closest( *selector* )

Returns the first parent object that the selector matches or null if not found.

```js
const g1 = $.svg.add('g');
const g2 = g1.add('g');
if (svg === g2.closest('svg')) {
  //...
}
```


## *element*.cloneNode(\[true\])

It creates an element copy. If the parameter is `true`, the copy is in deep and other child elements
are copied too. A clone node must be attached to an element with `.attachTo()`.

```js
const circle1 = $.svg.add('circle');
const circle2 = circle1.cloneNode().attachTo(svg);
```


## *element*.content()

If you need to get the SVG element content as a text, you can use the method `.content()` without
parameters. This method returns the current inner SVG elements.

```js
$.svg.add('circle').r(10).cx(50).cy(50);
console.log($.svg.content());
```


## *element*.content(source)

If you need to put the SVG element content from a text, you can use the method
`.content(source)`. This method returns the current Grapper wrapper and puts the text as inner the
source.

```js
$.svg.content(`<circle r="10" cx="50" cy="50"></circle>`);
```

## *element*.source()

If you need to get the element source, included the element, you can use `.source()`. This method
return the source element as a text.

```js
$.svg.add('circle').r(10).cx(50).cy(50);
console.log($.svg.source());
```


## *element*.id()

Returns the current unique ID. If the element does not have a unique ID, it is created.


## *element*.href()

Returns the unique ID as a `#id`


## *element*.url()

Returns the unique ID as a `url(id)`


## *element*.el

In some cases, you need the unwrapped original element. In these cases you can get the original
element wrapped with the attribute `.el`.

