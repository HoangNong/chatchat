'use strict';

exports.name = '/http';
exports.requires = [
	'@http',
	'/app'
];
exports.factory = function(http, app) {
	return http.Server(app);
};