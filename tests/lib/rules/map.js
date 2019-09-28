/**
 * @fileoverview Rule that suggests to use native map method
 * @author Vladislav Yeremeyev
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/map'),
	RuleTester = require('eslint').RuleTester;

// var messages = {
// 	always: 'Prefer jQuery\'s extend over Underscore\'s',
// 	never: 'Prefer Underscore\'s extend over jQuery\'s'
// };
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });
ruleTester.run('map', rule, {
	valid: [
		{
			code: '[1, 2, 3].map(fn)'
		},
		{
			code: '$.map([1, 2, 3], fn)'
		},
		{
			code: '_.map({a: 1, b: 2, c: 3}, fn)'
		},
		{
			code: 'Array.isArray(arr) ? arr.map(fn) : _.map(arr, fn);'
		}
	],
	invalid: [
		{
			code: '_.map([1, 2, 3], fn)',
			errors: [
				{
					messageID: 'preferNativeMap',
					type: 'CallExpression'
				}
			]
		},
		{
			code: '_.map(collection, fn)',
			errors: [
				{
					messageID: 'preferNativeMap',
					type: 'CallExpression'
				}
			]
		},
		{
			code: '_.map([{a: 1, b: 2, c: 3}], fn)',
			errors: [
				{
					messageID: 'preferNativeMap',
					type: 'CallExpression'
				}
			]
		},
		{
			code: '_.map(() => [], fn)',
			errors: [
				{
					messageID: 'preferNativeMap',
					type: 'CallExpression'
				}
			]
		},
		{
			code: '_.map(_.map({ a: 1, b: 2 }, el => el), fn)',
			errors: [
				{
					messageID: 'preferNativeMap',
					type: 'CallExpression'
				}
			]
		}
	]
});
