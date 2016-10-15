'use strict';

exports.name = '/config/auth';
exports.requires = [
	'@passport',
	'/config/auth/strategies/local',
	'/models/user'
];
exports.factory = function(passport, localStrategy, User) {
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use(localStrategy);

	return passport;
};
