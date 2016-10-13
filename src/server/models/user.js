'user strict';

exports.name = '/models/user';
exports.requires = [
	'@bcrypt-nodejs',
	'/config/db'
];
exports.factory = function(bcrypt, db) {
	var userSchema = db.Schema({
		local: {
			email: String,
			password: String
		},
		facebook: {
			id: String,
			token: String,
			email: String,
			name: String
		},
		twitter: {
			id: String,
			token: String,
			displayName: String,
			userName: String
		},
		google: {
			id: String,
			token: String,
			email: String,
			name: String
		}
	});

	// generating a hash
	userSchema.methods.generateHas = function(password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	};

	// check if password is valid
	userSchema.methods.validPassword = function(password) {
		return bcrypt.compareSync(password, this.local.password);
	};

	return db.model('User', userSchema);
};
