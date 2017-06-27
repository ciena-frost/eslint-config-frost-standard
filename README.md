[ci-img]: https://travis-ci.org/ciena-frost/eslint-config-frost-standard.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/eslint-config-frost-standard

[cov-img]: https://coveralls.io/repos/github/ciena-frost/eslint-config-frost-standard/badge.svg?branch=master
[cov-url]: https://coveralls.io/github/ciena-frost/eslint-config-frost-standard

[npm-img]: https://img.shields.io/npm/v/eslint-config-frost-standard.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/eslint-config-frost-standard

# eslint-config-frost-standard [![ci][ci-img]][ci-url] [![cov][cov-img]][cov-url] [![npm][npm-img]][npm-url]

Standard ESLint rules for Frost projects (based on [`standard`](https://github.com/feross/standard)).
It is our goal to not deviate from `standard` but rather augment it with some additional rules not currently covered
by `standard`. For example, we currently add some rules w.r.t. JSDoc comments.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Additional Rules

One of the reasons for this package's existence is to be able to define some additional rules that `standard`
didn't see fit to include, but that we find useful/necessary. Here we will highlight what these rules are, but just
in case our documentation ever falls behind :scream:, You can always find the full list of additions [here](index.js).

### `camelcase`
Enforces a `camelCase` variable naming convention. More details available
[here](http://eslint.org/docs/rules/camelcase).

### `complexity`
Enforces a maximum cyclomatic complexity (of 5) for functions. More details available [here](http://eslint.org/docs/rules/complexity).

### `max-len`
Enforces a maximum line length of 120 characters. More details available [here](http://eslint.org/docs/rules/max-len)

### `no-var`
Enforces the use of `let` or `const` instead of `var`. More details available
[here](http://eslint.org/docs/rules/no-var).

### `object-curly-spacing`
Enforces that object literals do not have spaces around the curly braces. More details available
[here](http://eslint.org/docs/rules/object-curly-spacing).

### `no-unused-expressions`
This is mainly to avoid using dangerous property assertions in `chai` like `expect().to.be.null`. Some discussion
about why those are dangerous is available [here](https://github.com/chaijs/chai/issues/726).
More details available [here](http://eslint.org/docs/rules/no-unused-expressions).

### `valid-jsdoc`
Make sure your `JSDoc` comment blocks are valid/consistent. More details available
[here](http://eslint.org/docs/rules/valid-jsdoc).

### `eslint-plugin-ember-standard`
We use a number of rules from
[`eslint-plugin-ember-standard`](https://github.com/ciena-blueplanet/eslint-plugin-ember-standard). More details
about each possible rule are available
[here](https://github.com/ciena-blueplanet/eslint-plugin-ember-standard/tree/master#rules).

#### `ember-standard/computed-property-readonly`
Ensure that all computed properties are read-only.

#### `ember-standard/destructure`
Ensure that the `Ember` object is destructured.

#### `ember-standard/import`
Ensure that the `Ember` is explicitly imported.

#### `ember-standard/logger`
Ensure that the `Ember.Logger` is used instead of `console.log()`.

#### `ember-standard/no-set-in-computed-property`
Ensure that values are not `set()` inside a computed property (no side-effects).

#### `ember-standard/no-settimeout`
Ensure that `Ember.run` is used instead of `setTimeout()`.

#### `ember-standard/prop-types`
Ensure that `PropTypes` references from `ember-prop-types` are valid.

#### `ember-standard/single-destructure`
Ensure Ember properties are destructured in a single variable declaration.

### `eslint-plugin-mocha`
We use a number of rules from [`eslint-plugin-mocha`](https://github.com/lo1tuma/eslint-plugin-mocha)

#### `mocha/handle-done-callback`
Make sure that when you define the `done` callback, you actually call it somewhere. More details available [here](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/handle-done-callback.md).

#### `mocha/no-exclusive-tests`
Make sure you don't accidentally check in a `describe.only`. More details available [here](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md).

#### `mocha/no-global-tests`
Make sure you don't use an `it()` outside of a `describe()`. More details available [here](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-global-tests.md).

#### `mocha/no-pending-tests`
Make sure you don't include empty `it()` calls. More details available [here](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-pending-tests.md).

#### `mocha/no-skipped-tests`
Emit a warning when you use `it.skip()` or `describe.skip()`. Sometimes it's necessary, but it's nice to easily see them all listed out in one place, and they should be temporary whenever they are checked in. More details available [here](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-skipped-tests.md).

### `eslint-plugin-ocd`
We use a number of rules from [`eslint-plugin-ocd`](https://github.com/ciena-blueplanet/eslint-plugin-ocd).
More details about the rules are available [here](https://github.com/ciena-blueplanet/eslint-plugin-ocd#rules).

#### `ocd/sort-import-declaration-specifiers`
Ensures that named imports within a single import block are sorted alphabetically.

#### `ocd/sort-import-declaration`
Ensures that imports are sorted alphabetically (by the module name, not the thing being imported).

#### `ocd/sort-variable-declarator-properties`
Ensures that destructured variables are sorted alphabetically.
