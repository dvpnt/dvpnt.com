const _ = require('lodash');
const path = require('path');
const {defaultLanguage} = require('./i18n');

function makeBlogLink(langKey) {
	return langKey === defaultLanguage ? '/blog' : `/blog/${langKey}`;
}

function makePostLink(slug) {
	return path.join('/blog', slug).replace(/\/$/, '');
}

exports.createPages = async ({actions, graphql, reporter}) => {
	const {createPage} = actions;
	const BlogTemplate = require.resolve('./src/templates/Blog.jsx');
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
							link
						}
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');

		return;
	}

	const {edges} = result.data.allMarkdownRemark;

	const langKeys = _(edges)
		.map('node.fields.langKey')
		.uniq()
		.value();


	langKeys.forEach((langKey) => {
		const link = makeBlogLink(langKey);

		createPage({
			path: link,
			component: BlogTemplate,
			context: {
				langKey,
				link
			}
		});
	});

	const groupedEdges = _.groupBy(edges, 'node.fields.slugWithoutLang');

	edges.forEach(({node}) => {
		const {slug, slugWithoutLang, langKey} = node.fields;

		const translations = _(groupedEdges[slugWithoutLang])
			.filter(({node}) => node.fields.langKey !== langKey)
			.map(({node}) => _.pick(node.fields, 'langKey', 'link'))
			.value();

		createPage({
			path: makePostLink(slug),
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

		createNodeField({
			name: 'link',
			node,
			value: makePostLink(slug)
		});
	}
};
