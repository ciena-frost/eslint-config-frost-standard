'use strict'

const CLIEngine = require('eslint').CLIEngine
const expect = require('chai').expect
const config = require('../')

describe('config', () => {
  it('is valid', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'eslintrc.json'
    })

    const code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'
    expect(cli.executeOnText(code).errorCount).to.be.equal(0)
  })

  it('extends standard', () => {
    expect(config.extends[0]).to.be.equal('standard')
  })

  it('includes valid-jsdoc', () => {
    expect(config.rules['valid-jsdoc']).not.to.be.null
  })
})

