module.exports = {
	siteMetadata: {
		title: 'devpoint',
		description: 'Development. Support. Consulting.',
		author: 'dvpnt',
		siteUrl: process.env.NODE_ENV === 'production' ? 'https://dvpnt.com' : 'http://localhost:8000'
	},
	plugins: [
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
					'gatsby-remark-smartypants',
					'gatsby-remark-autolink-headers',
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
				langKeyDefault: 'ru',
				useLangKeyLayout: false,
				prefixDefault: false,
				pagesPaths: ['content/posts']
			}
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-catch-links'
	]
};
