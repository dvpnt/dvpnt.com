module.exports = {
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog',
				path: `${__dirname}/src/blog`
			}
		},
		'gatsby-transformer-remark'
	]
};
