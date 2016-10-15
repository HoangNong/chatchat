'use strict';

var profile = process.env.NODE_ENV || 'development';

exports.name = '/config/env';
exports.requires = [
	'@lodash',
	'@path',
	exports.name + '/' + profile
];
exports.factory = function(_, path, specifiedConfiguration) {
	var defaults = {
		_root: path.resolve(__dirname, '../..'),
		_profile: profile,
		applicationName: 'chatchat',
		session: {
			cookie: '_sid',
			expiry: 60 * 60 * 1000,
			secret: 'chatchat-chat-88888',
			resave: true,
			saveUninitialized: true
		},
		development: true
	};

	return _.assign(defaults, specifiedConfiguration);
};
