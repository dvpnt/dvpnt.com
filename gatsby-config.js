module.exports = {
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
		'gatsby-plugin-sass',
		'gatsby-plugin-catch-links'
	]
};
