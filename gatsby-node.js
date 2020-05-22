const _ = require('lodash');
const path = require('path');

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
						fields {
							slug
							slugWithoutLang
							langKey
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

	const {edges} = result.data.allMarkdownRemark;
	const groupedEdgesByLang = _.groupBy(edges, 'node.fields.slugWithoutLang');

	edges.forEach(({node}) => {
		const {slug, slugWithoutLang, langKey} = node.fields;

		const translations = _(groupedEdgesByLang[slugWithoutLang])
			.filter(
				({node}) => node.fields.langKey !== langKey
			)
			.map(({node}) => _.pick(node.fields, 'langKey', 'slug'))
			.value();

		createPage({
			path: path.join('/blog', slug).replace(/\/$/, ''),
			component: PostTemplate,
			context: {
				slug,
				translations
			}
		});
	});
};

exports.onCreateNode = ({node, actions}) => {
	const {createNodeField} = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const {slug, langKey} = node.fields;

		createNodeField({
			name: 'slugWithoutLang',
			node,
			value: slug.replace(new RegExp(`^/${langKey}/`), '/')
		});
	}
};
