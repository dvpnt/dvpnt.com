module.exports = {
	plugins: [
		'gatsby-plugin-sass',
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
		'gatsby-plugin-catch-links'
	]
};
