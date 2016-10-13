'use strict';

exports.name = '/routes/api';
exports.requires = [
	'/app',
];
exports.factory = function(app) {
	app.use('/api', function(req, res, next) {
		res.json({ user: 'HoangNV' });
	});
};