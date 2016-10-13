'use strict';

exports.name = '/config/auth/strategies/local';
exports.requires = [
	'@bluebird',
	'@passport-local',
	'/models/user'
];
exports.factory = function(Promise, local, User) {
	return new local.Strategy({
		usernameField : 'email',
		passwordField : 'password',
		passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
	}, function(req, email, password, done) {
		if (!email) {
			return done(null, false);
		}

		var query = User.where({
			'local.email': email
		}).findOne();

		return Promise.resolve(query.exec()).then(function(user) {
			if (!user) {
				return Promise.reject(new Error('User not found'));
			}

			if (!user.validPassword(password)) {
				return Promise.reject(new Error('Incorrect password'));
			}

			return user;
		}).then(function(user) {
			done(null, user);
		}).catch(done);
	});
};
