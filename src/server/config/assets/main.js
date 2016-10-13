'use strict';

exports.name = '/config/assets';
exports.requires = [
	'@bluebird',
	'@glob',
	'/app'
];
exports.factory = function(Promise, glob, app) {
	function convert(files, version) {
		return files.map(function(file) {
			return file.replace(/^src\/client/, '/src') + '?' + version;
		});
	}

	return new Promise(function(resolve, reject) {
		glob('src/client/*/**/*.js', function(err, files) {
			if (err) {
				return reject(err);
			}

			files.unshift('src/client/import.js');
			files.unshift('src/client/main.js');
			resolve(files);
		});	
	}).then(function(files) {
		return convert(files, Date.now());
	}).then(function(assets) {
		app.use(function(req, res, next) {
			res.locals.assets = assets;

			next();
		});
	});
};