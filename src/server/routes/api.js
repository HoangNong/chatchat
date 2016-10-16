'use strict';

exports.name = '/routes/api';
exports.requires = [
	'/app',
	'/middlewares/auth/filter',
	'/middlewares/util',
	'/middlewares/todo'
];
exports.factory = function(app, authFilter, util, todo) {
	app.use('/api', authFilter.isLoggedIn);

	app.get('/api/todos', todo.list, util.render('todos'));
	app.post('/api/create', todo.create);
};
