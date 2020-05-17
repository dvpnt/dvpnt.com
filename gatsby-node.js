exports.createPages = async ({actions, graphql, reporter}) => {
	const {createPage} = actions;
	const PostTemplate = require.resolve('./src/templates/Post.jsx');

	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
						}
					}
				}
			}
		}
	`);

	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');

		return;
	}

	result.data.allMarkdownRemark.edges.forEach(({node}) => {
		createPage({
			path: node.frontmatter.path,
			component: PostTemplate
		});
	});
};
