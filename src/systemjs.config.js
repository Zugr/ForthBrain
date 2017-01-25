(function (global) {
	System.config({
		map: {
			"main": "src/code/",
			'matreshka': './node_modules/matreshka'
		},
		packages: {
			"main": {
				main: "main.js",
			},
			"matreshka": {
				main: "index.js",
				map: {
					'./matreshka': './matreshka/index.js',
					'./array': './array/index.js',
					'./array/orderby': './array/orderby/index.js',
					'./array/recreate': './array/recreate/index.js',
					'./array/_pseudonativemethods': './array/_pseudonativemethods/index.js',
					'./array/_processrendering': './array/_processrendering/index.js',
					'./object': './object/index.js',
					'./binders': './binders/index.js',
					'./on': './on/index.js',
					'./on/_delegatelistener': './on/_delegatelistener/index.js',
					'./off': './off/index.js',
					'./trigger': './trigger/index.js',
					'./calc': './calc/index.js',
					'./bindnode': './bindnode/index.js',
					'./unbindnode': './unbindnode/index.js',
					'./parsebindings': './parsebindings/index.js',
					'./parsebindings/_processattribute': './parsebindings/_processattribute/index.js',
					'./_dom': './_dom/index.js',
					'./_dom/mq': './_dom/mq/index.js',
					'./_core': './_core/index.js',
					'./_helpers': './_helpers/index.js',
				},
			},
		}
	});
})(this);
