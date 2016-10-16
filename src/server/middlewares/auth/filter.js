'use strict';

exports.name = '/middlewares/auth/filter';
exports.requires = [

];
exports.factory = function() {
	var self = {};

	self.isLoggedIn = function(req, res, next) {
		console.log('is logged in', req.isAuthenticated());
		if (req.isAuthenticated()) {
			return next();
		}

		return next();
		// res.redirect('/sign-on');
	};

	return self;
};
