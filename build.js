const Metalsmith = require('metalsmith');
const debug = require('metalsmith-debug');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const sass = require('metalsmith-sass');
const watch = require('metalsmith-watch');

const metalsmith = Metalsmith(__dirname)
	.source('src')
	.destination('build')
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

if (process.env.NODE_ENV === 'development') {
	metalsmith
		.use(debug())
		.use(watch({
			paths: {
				'src/**/*': '**/*',
				'layouts/**/*': '**/*'
			},
		}));
}

metalsmith.build(function(err) {
	if (err) throw err;
});

