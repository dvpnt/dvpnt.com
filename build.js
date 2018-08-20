const Metalsmith = require('metalsmith');
const debug = require('metalsmith-debug');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const sass = require('metalsmith-sass');
const watch = require('metalsmith-watch');

Metalsmith(__dirname)
	.source('src')
	.destination('build')
	.use(watch({
		paths: {
			'src/**/*': '**/*',
			'layouts/**/*': '**/*'
		},
	}))
	.use(debug())
	.use(sass({
		sourceMap: true,
		sourceMapContents: true
	}))
	.use(markdown())
	.use(layouts({
		engineOptions: {
			pretty: true
		}
	}))
	.build(function(err) {
		if (err) throw err;
	});
