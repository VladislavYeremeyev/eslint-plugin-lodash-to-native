/**
 * @fileoverview Rule that suggests to use native map method
 * @author Vladislav Yeremeyev
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce using native map method',
			category: 'Best Practices',
			recommended: false
		},
		fixable: 'code',
		schema: [
			{
				enum: ['ternary', 'condition']
			}
		],
		messages: {
			preferNativeMap: 'Consider using the native Array.prototype.map'
		}
	},

	create: function(context) {
		// with rule option 'condition' fix would be condition block
		// function isInsideConditionBlock(node) {
		// 	const conditionNode = node.parent.parent.parent;
		// 	if (conditionNode) {
		// 		if (
		// 			conditionNode.type === 'IfStatement' &&
		// 			conditionNode.test.type === 'CallExpression' &&
		// 			conditionNode.test.callee.object.name === 'Array' &&
		// 			conditionNode.test.callee.property.name === 'isArray' &&
		// 			conditionNode.test.arguments.length === 1 &&
		// 			conditionNode.test.arguments[0].type === 'Identifier' &&
		// 			conditionNode.test.arguments[0].name === node.arguments[0].name &&
		// 			node === conditionNode.alternate.body.expression) {
		// 			return true;
		// 		} else {
		// 			return false;
		// 		}
		// 	}
		// }

		return {
			// with this selector tests suddenly falls :(
			// 'CallExpression[callee.object.name="_"][callee.property.name="map"]': function(node) {
			CallExpression: function(node) {
				if (
					node.callee &&
					node.callee.object &&
					node.callee.object.name === '_' &&
					node.callee.property.name === 'map' &&
					node.arguments.length === 2
				) {
					if (node.arguments[0].type === 'ArrayExpression') {
						context.report({
							node: node,
							messageId: 'preferNativeMap',
							fix: function(fixer) {
								let sourceCode = context.getSourceCode();

								return [
									fixer.replaceText(
										node,
										`${sourceCode.getText(
											node.arguments[0]
										)}.map(${sourceCode.getText(node.arguments[1])})`
									)
								];
							}
						});
					} else if (node.arguments[0].type !== 'ObjectExpression') {
						// Check if fix is already applied
						if (
							node.parent &&
							node.parent.type === 'ConditionalExpression' &&
							node.parent.test.type === 'CallExpression' &&
							node.parent.test.callee.object.name === 'Array' &&
							node.parent.test.callee.property.name === 'isArray' &&
							node.parent.test.arguments.length === 1 &&
							node.parent.test.arguments[0].type === 'Identifier' &&
							node.parent.test.arguments[0].name === node.arguments[0].name &&
							node === node.parent.alternate
						) {
							return;
						} else {
							context.report({
								node: node,
								messageId: 'preferNativeMap',
								fix: function(fixer) {
									let sourceCode = context.getSourceCode();

									return [
										fixer.replaceText(
											node,
											`(Array.isArray(${sourceCode.getText(
												node.arguments[0]
											)}) ? ${sourceCode.getText(
												node.arguments[0]
											)}.map(${sourceCode.getText(
												node.arguments[1]
											)}) : ${sourceCode.getText(node)})`
										)
									];
								}
							});
						}
					}
				}
			}
		};
	}
};
