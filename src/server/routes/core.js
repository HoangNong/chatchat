'use strict';

exports.name = '/routes/core';
exports.requires = [
	'/app',
	'/middlewares/util'
];
exports.factory = function(app, util) {
	app._get('landing', '/', util.render('landing'));
};
