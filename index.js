/**
 * @fileoverview ESLint lodash custom linting rules
 * @author Vladislav Yeremeyev
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
	configs: {
		recommended: {
			plugins: ['lodash-to-native'],
			env: {
				browser: true,
				es6: true,
				node: true
			},
			rules: {
				'lodash-to-native/map': 'warn'
			}
		}
	},
	rules: requireIndex(__dirname + '/lib/rules')
};
