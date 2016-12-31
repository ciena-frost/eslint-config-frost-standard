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

  describe('ember-standard plugin', function () {
    it('is included', function () {
      expect(config.plugins).to.include('ember-standard')
    })

    it('includes computed-property-readonly rule', function () {
      expect(config.rules['ember-standard/computed-property-readonly']).not.to.equal(undefined)
    })

    it('includes destructure rule', function () {
      expect(config.rules['ember-standard/destructure']).not.to.equal(undefined)
    })

    it('includes import rule', function () {
      expect(config.rules['ember-standard/import']).not.to.equal(undefined)
    })

    it('includes logger rule', function () {
      expect(config.rules['ember-standard/logger']).not.to.equal(undefined)
    })

    it('includes no-set-in-computed-property rule', function () {
      expect(config.rules['ember-standard/no-set-in-computed-property']).not.to.equal(undefined)
    })

    it('includes no-settimeout rule', function () {
      expect(config.rules['ember-standard/no-settimeout']).not.to.equal(undefined)
    })

    it('includes prop-types rule', function () {
      expect(config.rules['ember-standard/prop-types']).not.to.equal(undefined)
    })

    it('includes single-destructure rule', function () {
      expect(config.rules['ember-standard/single-destructure']).not.to.equal(undefined)
    })
  })

  describe('mocha plugin', function () {
    it('is included', function () {
      expect(config.plugins).to.include('mocha')
    })

    it('includes handle-done-callback rule', function () {
      expect(config.rules['mocha/handle-done-callback']).not.to.equal(undefined)
    })

    it('includes no-exclusive-tests rule', function () {
      expect(config.rules['mocha/no-exclusive-tests']).not.to.equal(undefined)
    })

    it('includes no-global-tests rule', function () {
      expect(config.rules['mocha/no-global-tests']).not.to.equal(undefined)
    })

    it('includes no-pending-tests rule', function () {
      expect(config.rules['mocha/no-pending-tests']).not.to.equal(undefined)
    })

    it('includes no-skipped-tests rule', function () {
      expect(config.rules['mocha/no-skipped-tests']).not.to.equal(undefined)
    })
  })

  describe('ocd plugin', function () {
    it('is included', function () {
      expect(config.plugins).to.include('ocd')
    })

    it('includes sort-import-declarations rule', function () {
      expect(config.rules['ocd/sort-import-declarations']).not.to.equal(undefined)
    })

    it('includes sort-variable-declarator-properties rule', function () {
      expect(config.rules['ocd/sort-variable-declarator-properties']).not.to.equal(undefined)
    })
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
