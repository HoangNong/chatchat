'use strict';

exports.name = '/config/auth';
exports.requires = [
	'@passport',
	'/config/auth/strategies/local'
];
exports.factory = function(passport, localStrategy) {
	passport.use(localStrategy);

	return passport;
};
