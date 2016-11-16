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
    expect(cli.executeOnText(code).errorCount).to.equal(0)
  })

  it('should extend standard', () => {
    expect(config.extends[0]).to.equal('standard')
  })

  it('should include camelcase', () => {
    expect(config.rules.camelcase).not.to.equal(undefined)
  })

  it('should include complexity', () => {
    expect(config.rules.complexity).not.to.equal(undefined)
  })

  it('should include max-len', () => {
    expect(config.rules['max-len']).not.to.equal(undefined)
  })

  it('should include no-unused-expressions', () => {
    expect(config.rules['no-unused-expressions']).not.to.equal(undefined)
  })

  it('should include valid-jsdoc', () => {
    expect(config.rules['valid-jsdoc']).not.to.equal(undefined)
  })
})

