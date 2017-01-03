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

