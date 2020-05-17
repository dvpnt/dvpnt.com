module.exports = {
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/content/posts`
			}
		},
		'gatsby-transformer-remark'
	]
};
