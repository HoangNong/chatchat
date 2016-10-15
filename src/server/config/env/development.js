'use strict';

exports.name = '/config/env/development';
exports.value = {
	debug: true,
	host: 'dev.chatchat',
	port: 3600,
	db: 'mongodb://localhost/chatchat',
	session: {
		cookie: '_sid',
		expiry: 60 * 60 * 1000,
		secret: 'chatchat-chat-88888',
		resave: true,
		saveUninitialized: true
	},
	mail: {
		form: 'noname@chatchat.nv',
		region: 'us-west-2',
		accessKeyId: 'AKIAI6W6J2H4K4W3OZKA',
		secretAccessKey: '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'
	}
};
