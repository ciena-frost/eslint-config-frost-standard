[ci-img]: https://travis-ci.org/ciena-frost/eslint-config-frost-standard.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/eslint-config-frost-standard

[cov-img]: https://coveralls.io/repos/github/ciena-frost/eslint-config-frost-standard/badge.svg?branch=master
[cov-url]: https://coveralls.io/github/ciena-frost/eslint-config-frost-standard

[npm-img]: https://img.shields.io/npm/v/eslint-config-frost-standard.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/eslint-config-frost-standard

# eslint-config-frost-standard <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

Standard ESLint rules for Frost projects (based on [`standard`](https://github.com/feross/standard)).
It is our goal to not deviate from `standard` but rather augment it with some additional rules not currently covered
by `standard`. For example, we currently add some rules w.r.t. JSDoc comments.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Additional Rules

One of the reasons for this package's existence is to be able to define some additional rules that `standard` didn't see fit to include, but that we find useful/necessary. Here we will highlight what these rules are, but just in case our documentation ever falls behind :scream:, You can always find the full list of additions [here](eslintrc.json).

### `camelcase`
Enforces a `camelCase` variable naming convention. More details available [here](http://eslint.org/docs/rules/camelcase).

### `complexity`
Enforces a maximum cyclomatic complexity (of 5) for functions. More details available [here](http://eslint.org/docs/rules/complexity).

### `max-len`
Enforces a maximum line length of 120 characters. More details available [here](http://eslint.org/docs/rules/max-len)

### `valid-jsdoc`
Make sure your `JSDoc` comment blocks are valid/consistent. More details available [here](http://eslint.org/docs/rules/valid-jsdoc).

### `eslint-plugin-mocha`
We use a number of rules from [`eslint-plugin-mocha`](https://github.com/lo1tuma/eslint-plugin-mocha) but we currently use [our own fork](https://github.com/job13er/eslint-plugin-mocha) of the project to provide support for `ember-cli-mocha`. We should be updating to the latest soon since our fork is no longer necessary and we can define this [in our rule config](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-exclusive-tests.md)

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

### `no-unused-expressions`
Stop developers from using property assertions like `expect(foo).to.be.true`. Mainly because of [this issue](https://github.com/chaijs/chai/issues/726).
More details available [here](http://eslint.org/docs/rules/no-unused-expressions).
