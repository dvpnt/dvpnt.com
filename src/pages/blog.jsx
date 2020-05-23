import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import {Layout, SEO} from '../components';

function Blog(props) {
	const {edges} = props.data.allMarkdownRemark;

	const posts = edges
		.filter((edge) => Boolean(edge.node.frontmatter.date))
		.map((edge) => ({
			id: edge.node.id,
			path: edge.node.fields.slug,
			text: edge.node.excerpt,
			...edge.node.frontmatter
		}));

	return (
		<Layout>
			<SEO title="Блог" />
			{posts.map((post) => (
				<div key={post.id} style={{marginBottom: '20px'}}>
					<Link to={`blog/${post.path}`}>
						{post.title} ({post.date})
					</Link>
					<div>{post.text}</div>
				</div>
			))}
		</Layout>
	);
}

Blog.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	}).isRequired
};

export const pageQuery = graphql`
	query {
		allMarkdownRemark(,
			sort: { order: DESC, fields: [frontmatter___date] },
			filter: { fields: { langKey: { eq: "ru" } } }
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
					}
				}
			}
		}
	}
`;

export default Blog;
