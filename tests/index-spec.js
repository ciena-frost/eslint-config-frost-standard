'use strict'

const CLIEngine = require('eslint').CLIEngine
const expect = require('chai').expect
const config = require('../')

describe('config', function () {
  it('should be valid', function () {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'index.js'
    })

    const code = 'let foo = 1\nlet bar = function () {}\nbar(foo)\n'
    expect(cli.executeOnText(code).errorCount).to.equal(0)
  })

  it('should extend standard', function () {
    expect(config.extends[0]).to.equal('standard')
  })

  describe('ember-standard plugin', function () {
    it('should be included', function () {
      expect(config.plugins).to.include('ember-standard')
    })

    it('should include computed-property-readonly rule', function () {
      expect(config.rules['ember-standard/computed-property-readonly']).not.to.equal(undefined)
    })

    it('should include destructure rule', function () {
      expect(config.rules['ember-standard/destructure']).not.to.equal(undefined)
    })

    it('should include import rule', function () {
      expect(config.rules['ember-standard/import']).not.to.equal(undefined)
    })

    it('should include logger rule', function () {
      expect(config.rules['ember-standard/logger']).not.to.equal(undefined)
    })

    it('should include no-set-in-computed-property rule', function () {
      expect(config.rules['ember-standard/no-set-in-computed-property']).not.to.equal(undefined)
    })

    it('should include no-settimeout rule', function () {
      expect(config.rules['ember-standard/no-settimeout']).not.to.equal(undefined)
    })

    it('should include prop-types rule', function () {
      expect(config.rules['ember-standard/prop-types']).not.to.equal(undefined)
    })

    it('should include single-destructure rule', function () {
      expect(config.rules['ember-standard/single-destructure']).not.to.equal(undefined)
    })
  })

  describe('mocha plugin', function () {
    it('should be included', function () {
      expect(config.plugins).to.include('mocha')
    })

    it('should include handle-done-callback rule', function () {
      expect(config.rules['mocha/handle-done-callback']).not.to.equal(undefined)
    })

    it('should include no-exclusive-tests rule', function () {
      expect(config.rules['mocha/no-exclusive-tests']).not.to.equal(undefined)
    })

    it('should include no-global-tests rule', function () {
      expect(config.rules['mocha/no-global-tests']).not.to.equal(undefined)
    })

    it('should include no-mocha-arrows rule', function () {
      expect(config.rules['mocha/no-mocha-arrows']).not.to.equal(undefined)
    })

    it('should include no-pending-tests rule', function () {
      expect(config.rules['mocha/no-pending-tests']).not.to.equal(undefined)
    })

    it('should include no-skipped-tests rule', function () {
      expect(config.rules['mocha/no-skipped-tests']).not.to.equal(undefined)
    })

    it('should valid-test-description rule', function () {
      expect(config.rules['mocha/valid-test-description']).not.to.equal(undefined)
    })
  })

  describe('ocd plugin', function () {
    it('should be included', function () {
      expect(config.plugins).to.include('ocd')
    })

    it('should include sort-import-declaration-specifiers rule', function () {
      expect(config.rules['ocd/sort-import-declaration-specifiers']).not.to.equal(undefined)
    })

    it('should include sort-import-declarations rule', function () {
      expect(config.rules['ocd/sort-import-declarations']).not.to.equal(undefined)
    })

    it('should include sort-variable-declarator-properties rule', function () {
      expect(config.rules['ocd/sort-variable-declarator-properties']).not.to.equal(undefined)
    })
  })

  it('should include camelcase', function () {
    expect(config.rules.camelcase).not.to.equal(undefined)
  })

  it('should include complexity', function () {
    expect(config.rules.complexity).not.to.equal(undefined)
  })

  it('should include max-len', function () {
    expect(config.rules['max-len']).not.to.equal(undefined)
  })

  it('should include no-unused-expressions', function () {
    expect(config.rules['no-unused-expressions']).not.to.equal(undefined)
  })

  it('should include no-var', function () {
    expect(config.rules['no-var']).not.to.equal(undefined)
  })

  it('should include object-curly-spacing', function () {
    expect(config.rules['object-curly-spacing']).not.to.equal(undefined)
  })

  it('should include valid-jsdoc', function () {
    expect(config.rules['valid-jsdoc']).not.to.equal(undefined)
  })
})
