# eslint-plugin-lodash-to-native

ESLint plugin with rules that enforce using native JavaScript methods instead of using [Lodash](https://lodash.com/) methods if it is possible.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Next, install `eslint-plugin-lodash`:

```bash
npm install -S https://github.com/VladislavYeremeyev/eslint-plugin-lodash-to-native.git
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lodash-to-native` globally.

## Features

* Prettier. Use: `npm run prettier`.
* Tested on [AST Explorer](https://astexplorer.net/)
* `Map` rule with auto-fix. Use Auto-fix Eslint Extension Command in your IDE or for example you could use `./node_modules/.bin/eslint --fix index.js`
* Auto-tests Use: `npm run test`.

## Usage

Add `lodash-to-native` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lodash-to-native"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lodash-to-native/map": "warn"
    }
}
```

## Supported Rules

* [map](https://github.com/VladislavYeremeyev/eslint-plugin-lodash-to-native/blob/master/docs/rules/map.md)
