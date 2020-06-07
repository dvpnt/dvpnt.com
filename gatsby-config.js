const {defaultLanguage} = require('./i18n');

module.exports = {
	siteMetadata: {
		title: 'devpoint',
		description: 'Development. Support. Consulting.',
		author: 'dvpnt',
		siteUrl: process.env.NODE_ENV === 'production' ? 'https://dvpnt.com' : 'http://localhost:8000'
	},
	plugins: [
		'gatsby-plugin-catch-links',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/content/posts`
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
					'gatsby-remark-autolink-headers',
					'gatsby-remark-responsive-iframe',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 800
						}
					},
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							inlineCodeMarker: '~'
						}
					},
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank'
						}
					}
				]
			}
		},
		{
			resolve: 'gatsby-plugin-i18n',
			options: {
				langKeyDefault: defaultLanguage,
				useLangKeyLayout: false,
				prefixDefault: false,
				pagesPaths: ['content/posts']
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'dvpnt',
				short_name: 'dvpnt',
				start_url: '/blog',
				background_color: '#ffffff',
				theme_color: '#06038d',
				// icon: 'src/assets/icon.png',
				display: 'minimal-ui'
			}
		}
	]
};
