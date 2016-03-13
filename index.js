var express = require('express');
var request = require('request');
var app = express();

module.exports = function startJustProxy(options) {
	if (!options || typeof options !== 'object') {
		throw Error('options is required.');
	}

	if (!options.port) {
		throw Error('port is required.');
	}

	var self = options.self || 8080;
	var port = options.port;
	var verbose = options.verbose || false;

	app.use(function (req, res) {
		var url = 'http://localhost:' + port + req.originalUrl;
		var r = req.method === 'POST' ? request.post({uri: url, json: req.body})
			: request(url);

		if (verbose) logRequest(url, req);

		req.pipe(r).pipe(res);
	});

	app.listen(self, function() {
		console.log('proxy is running on port ' + self);
	});
};

function logRequest(url, req) {
	console.log('[' + req.method + ']');
	console.log(url);

	if (!isEmpty(req.body)) {
		console.log(req.body);
	}

	console.log('');
}

function isEmpty(obj) {
	for (var key in obj) {
		return false;
	}

	return true;
}
