'use strict';

exports.name = '/routes/auth';
exports.requires = [
	'/app',
	'/config/auth',
	'/middlewares/util',
	'/middlewares/registration',
];
exports.factory = function(app, auth, util, registration) {
	app._route('auth.sign-on', '/sign-on')
			.get(util.render('auth/sign-on'))
			.post(auth.authenticate('local', {
				session: false,
				successRedirect: '/api/todos',
				failureRedirect: '/sign-on',
				failureFlash: true
			}));

	app._route('auth.sign-up', '/sign-up')
			.get(util.render('auth/sign-up'))
			.post(registration.saveUser, util.redirect('auth.sign-on'));
};
