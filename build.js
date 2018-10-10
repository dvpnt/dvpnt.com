const Metalsmith = require('metalsmith');
const debug = require('metalsmith-debug');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const sass = require('metalsmith-sass');
const watch = require('metalsmith-watch');
const autoprefixer = require('metalsmith-autoprefixer');

const metalsmith = Metalsmith(__dirname)
	.source('src')
	.destination('build')
	.use(markdown())
	.use(layouts({
		engineOptions: {
			pretty: true
		}
	}))

if (process.env.NODE_ENV === 'development') {
	metalsmith
		.use(debug())
		.use(sass({
			sourceMap: true,
			sourceMapContents: true
		}))
		.use(watch({
			paths: {
				'src/**/*': '**/*',
				'layouts/**/*': '**/*'
			},
		}));
} else {
	metalsmith
		.use(sass({
			outputStyle: 'nested'
		}))
		.use(autoprefixer());
}

metalsmith.build(function(err) {
	if (err) throw err;
});

