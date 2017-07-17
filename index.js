const fs = require('fs')
const path = require('path')

/**
 * Based on the location of this file (assumed to be node_modules/eslint-config-frost-standard/index.js)
 * we want to read in the package.json file from the root of the project, and return the project name
 * @returns {String} the package name
 */
function getProjectName () {
  const pkgJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'package.json'), {encoding: 'utf8'}))
  return pkgJson.name
}

const localPrefixes = [
  '../',
  './',
  'dummy/'
]

try {
  const projectName = getProjectName()
  localPrefixes.push(projectName)
} catch (e) {}

module.exports = {
  extends: ['standard'],
  parser: 'babel-eslint',
  plugins: [
    'ember-standard',
    'mocha',
    'ocd'
  ],
  rules: {
    camelcase: 'error',
    complexity: ['error', 5],
    'ember-standard/computed-property-readonly': ['error', 'always'],
    'ember-standard/destructure': ['error', 'always'],
    'ember-standard/import': ['error', 'always'],
    'ember-standard/logger': ['error', 'always'],
    'ember-standard/no-set-in-computed-property': 'error',
    'ember-standard/no-settimeout': 'error',
    'ember-standard/prop-types': 'error',
    'ember-standard/single-destructure': 'error',
    'import/first': 'off', // disabling this so we can destructure Ember right after import (@job13er 2017-06-27)
    'max-len': ['error', {
      code: 120,
      tabWidth: 2
    }],
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-mocha-arrows': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-skipped-tests': 'warn',
    'mocha/valid-test-description': 'error',
    'no-template-curly-in-string': 'off',
    'no-unused-expressions': ['error', {
      allowTernary: true
    }],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'never'],
    'ocd/sort-import-declaration-specifiers': 'error',
    'ocd/sort-import-declarations': [
      'error',
      {
        localPrefixes
      }
    ],
    'ocd/sort-variable-declarator-properties': 'error',
    'valid-jsdoc': [
      'error',
      {
        prefer: {
          'virtual': 'abstract',
          'extends': 'augments',
          'constructor': 'class',
          'const': 'constant',
          'defaultvalue': 'default',
          'desc': 'description',
          'host': 'external',
          'fileoverview': 'file',
          'overview': 'file',
          'emits': 'fires',
          'func': 'function',
          'method': 'function',
          'var': 'member',
          'arg': 'param',
          'argument': 'param',
          'return': 'returns',
          'exception': 'throws'
        },
        requireReturn: false
      }
    ]
  }
}
