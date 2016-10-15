'use strict';

exports.name = '/config/express';
exports.requires = [
	'@express',
	'@body-parser',
	'@cookie-parser',
	'@path',
	'@connect-flash',
	'@express-session',
	'/config/env'
];
exports.activations = [
	'/config/route'
];
exports.factory = function(express, bodyParser, cookieParser, path,flash, session, env) {
	var app = express();

	if (env.development) {
		app.use('/src', express.static(path.resolve(env._root, '..')));
		app.use('/public', express.static(path.resolve(env._root, '../public')));
		app.use('/lib', express.static(path.resolve(env._root, '../../bower_components')));
		app.use('/build', express.static(path.resolve(env._root, '../../build/out')));
	}

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(cookieParser());
	app.set('env', env._profile);
	app.enable('trust proxy');
	app.disable('x-powered-by');
	app.use(flash());
	app.use(session(env.session));

	app.use(function(req, res, next) {
		res.locals._env = env;

		next();
	});

	return app;
};
