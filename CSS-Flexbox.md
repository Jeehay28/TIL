#### 🎯 Four layout modes:

- Block, for sections in a webpage
- Inline, for text
- Table, for two-dimensional table data
- Positioned, for explicit position of an element

### Flexible Box Layout Module

- makes it easier to design flexible responsive layout structure without using float or positioning

### Flexbox Elements

- To start using the Flexbox model, you need to first define a flex container

### CSS Flex Container

- The flex container becomes flexible by setting the display property to flex:

```
.flex-container {
  display: flex;
}
```

### The flex container properties are:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content
- order
- align-self

#### `justify-content` aligns items horizontally and accepts the following values:

- `flex-start`: Items align to the left side of the container.
- `flex-end`: Items align to the right side of the container.
- `center`: Items align at the center of the container.
- `space-between`: Items display with equal spacing between them.
- `space-around`: Items display with equal spacing around them.

#### `align-items` aligns items vertically and accepts the following values:

- `flex-start`: Items align to the top of the container.
- `flex-end`: Items align to the bottom of the container.
- `center`: Items align at the vertical center of the container.
- `baseline`: Items display at the baseline of the container.
- `stretch`: Items are stretched to fit the container.

#### `flex-direction` defines the direction items are placed in the container, and accepts the following values:

- `row`: Items are placed the same as the text direction.
- `row-reverse`: Items are placed opposite to the text direction.
- `column`: Items are placed top to bottom.
- `column-reverse`: Items are placed bottom to top.

```
/* The column value stacks the flex items vertically (from top to bottom): */
.flex-container {
  display: flex;
  flex-direction: column;
}
```

#### `order` specifies the order of a flexible item relative to the rest of the flexible items inside the same container

- By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2)

```
#pond {
  display: flex;
}

.yellow {
order : 1;
}
```

#### `align-self`aligns individual items

- This property accepts the same values as align-items and its value for the specific item.

```
#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
align-self : flex-end
}
```

#### `flex-wrap` specifies whether the flex items should wrap or not

- `nowrap`: Every item is fit to a single line.
- `wrap`: Items wrap around to additional lines.
- `wrap-reverse`: Items wrap around to additional lines in reverse.

```
/* The wrap value specifies that the flex items will wrap if necessary: */
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

```
/* The nowrap value specifies that the flex items will not wrap (this is default): */
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}
```

#### `flex-flow` a shorthand property for setting both the `flex-direction` and `flex-wrap` properties

```
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

#### `align-content` sets how multiple lines are spaced apart from each other. This property takes the following values:

- `flex-start`: Lines are packed at the top of the container.
- `flex-end`: Lines are packed at the bottom of the container.
- `center`: Lines are packed at the vertical center of the container.
- `space-between`: Lines display with equal spacing between them.
- `space-around`: Lines display with equal spacing around them.
- `stretch`: Lines are stretched to fit the container.
- `align-content` determines the spacing between lines, while `align-items` determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.

```
#pond {
  display: flex;
  flex-wrap: wrap;
align-content : flex-end
}
```

#### `gap` defines the size of the gap between the rows and columns

- a shorthand for the following properties: `row-gap` `column-gap`

```
/* Set the gap between rows and columns to 50px: */
.grid-container {
  gap: 50px;
}
```

#### Flexbox Froggy

- 🔗 [a game for learning CSS flexbox](https://flexboxfroggy.com/)

### `flex` property is a shorthand property for:

- `flex-grow` a number specifying how much the item will grow relative to the rest of the flexible items
- `flex-shrink` a number specifying how much the item will shrink relative to the rest of the flexible items
- `flex-basis` specifies the initial length of a flexible item
