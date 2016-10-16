'use strict';

exports.name = '/middlewares/todo';
exports.requires = [
	'/models/todo'
];
exports.factory = function(Todo) {
	var self = {};

	self.list = function(req, res, next) {
		var user_id = req.cookies ? req.cookies.user_id : undefined;

		Todo.find({
			user_id: user_id
		})
		.sort('-updated_at')
		.exec(function(err, todos) {
			if (err) {
				return next(err);
			}

			res.locals._todos = todos;
			next();
		}).catch(next);
	};

	self.create = function(req, res, next) {
		new Todo({
			user_id: req.cookies.user_id,
			content: req.body.content,
			updated_at: Date.now()
		}).save(function(err, todo, count) {
			if (err) {
				return next(err);
			}

			res.redirect('/api/todos');
		});
	};

	return self;
};
