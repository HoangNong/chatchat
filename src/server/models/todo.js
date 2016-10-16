'user strict';

exports.name = '/models/todo';
exports.requires = [
	'/config/db'
];
exports.factory = function(db) {
	var todoSchema = db.Schema({
		user_id: String,
		content: String,
		update_at: Date
	});

	return db.model('Todo', todoSchema);
};
