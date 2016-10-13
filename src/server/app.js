'use strict';

exports.name = '/app';
exports.requires = [
	'/config/express',
];
exports.activations = [
	'/config/assets',
	'/config/view-engine',
	'/routes/auth',
	'/routes/core',
	'/routes/api',
];
exports.factory = function(app) {
	return app;
};