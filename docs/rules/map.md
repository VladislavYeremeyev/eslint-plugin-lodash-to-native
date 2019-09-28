# Rule that suggests to use native Array.prototype.map method

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

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

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

When you would want to use only Lodash methods.
