'use strict';

exports.name = '/middlewares/registration';
exports.requires = [
	'/models/user'
];
exports.factory = function(User) {
	var self = {};

	self.saveUser = function(req, res, next) {
		var data = req.body;

		var newUser = new User();
		newUser.local.email = data.email;
		newUser.local.password = newUser.generateHas(data.password);

		newUser.save(function(err, user) {
			if (err) {
				console.log(err);
				return next(err);
			}

			console.log('save user done');
			next();
		})
	};

	return self;
};
