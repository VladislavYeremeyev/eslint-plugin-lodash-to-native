# Rule that suggests to use native Array.prototype.map method

## Rule Details

This rule aims to enforce using native Array.prototype.map instead of using Lodash map method, if it is possible.

Examples of **incorrect** code for this rule:

```js

let fn = el => el * 2;
_.map([1, 2, 3], fn);

```

Examples of **correct** code for this rule:

```js

let fn = el => el * 2;
[1, 2, 3].map(fn);

```

## When Not To Use It

When you would want to use only Lodash methods.
