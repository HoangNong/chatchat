'use strict';

var diLinker = require('di-linker');

diLinker.walk([
	'./src/server/**/*.js'
], require).then(function(context) {
	return context.bootstrap(['/main']);
}).then(function() {
	console.log('Application started');
}).catch(function(err) {
	console.error(err);
});