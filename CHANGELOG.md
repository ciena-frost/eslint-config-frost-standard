# 7.1.1 (2017-10-05)
* **Updated** eslint-plugin-ember-standard to new version which add support for `ember-decorators` to the `computed-readonly` rule

# 7.1.0 (2017-07-06)
* **Fixed** dependencies to use versions that have appropriate `peerDependencies` settings to work with `eslint@4`. 


# 7.0.0 (2017-06-27)
* **Upgraded** `eslint-config-standard` from `5.x` to `10.x`
* **Added** explicit disabling of `import/first` rule to allow us to destructure `Ember` directly below import
* **Added** `mocha/valid-test-descriptions` (Resolves [#38](https://github.com/ciena-frost/eslint-config-frost-standard/issues/38))
* **Added** `mocha/no-mocha-arrows` (Resolves [#37](https://github.com/ciena-frost/eslint-config-frost-standard/issues/37))
* **Added** `no-var` rule to enforce using `let` or `const` instead of `var`, b/c who the heck wants to use `var` anyway ;)
* **Updated** documentation in `README.md` for additional rules we've added.
* **Upgraded** `pr-bumper` to `3.x`
* **Switched** from `npm` to `yarn` for installing dependencies.
* **Added** `node@8` to build matrix.
* **Added** the ability to detect consuming project name and add it to `localPrefixes` automatically, and tested it by locally installing in an app.

# 6.0.2 (2017-06-24)
* **Upgraded** to `eslint-plugin-ember-standard@0.0.23`

# 6.0.1 (2017-03-23)

* **Upgraded** to eslint-plugin-ember-standard 0.0.22


# 6.0.0
## Breaking Changes
* **Converted** some warning rules to error rules (the `ember` and `ocd` ones that were recently introduced)
## Non-breaking Changes
* **Updated** `pr-bumper` and `travis` settings

# 5.3.2

* **Fixed** bug with fix functionality of `ember-standard/destructure` rule where a property could end up in the variable declarator twice.


# 5.3.1

* **Fixed** bug where `Ember.String` and `Ember.Object` were being destructured when they shouldn't be.


# 5.3.0

* **Added** warning to when using [object curly spacing](http://eslint.org/docs/rules/object-curly-spacing).


# 5.2.0

* **Fixed** `ocd/sort-imports` rule to separate internal and external modules.


# 5.1.0

* **Added** plugins [ember-standard](https://github.com/ciena-blueplanet/eslint-plugin-ember-standard) and [ocd](https://github.com/ciena-blueplanet/eslint-plugin-ocd) and configured their rules as warnings (will switch to errors in the next major release).


# 5.0.1
 * **Fixed** a typo in `README.md` (thanks @juwara0 😄)



# 5.0.0
* **Added** an additional rule: `no-unused-expressions` which will disallow `expect(foo).to.be.true` style assertions. See [this issue](https://github.com/chaijs/chai/issues/726) for more info.


# 4.0.1
 * **Updated** `eslint-plugin-mocha` to allow us to stop using the fork from `job13er`



# 4.0.0
 * **New Rule** `complexity` to enforce a maximum cyclomatic complexity of 5 for all functions.

# 3.0.0
## Breaking changes
 * **Switched** to `eslint@3.x`

## New Rules

 * **Added** rule to error on a `describe.only` or `describeComponent.only` in tests
 * **Added** rule to warn on a `describe.skip` or `it.skip` (with `--fix` option 😄 )
 * **Added** rule to error on an `it('pending test')` with no test
 * **Added** rule to error on a global `it()`(not within a test suite)
 * **Added** rule to error if the `done` callback isn't called when it's defined.

# 2.1.0
* Added camelcase property for variables
* Added max-len property of 120 chars per line
