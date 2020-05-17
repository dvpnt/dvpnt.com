import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import {Layout} from '../../components';

function Blog(props) {
	const {edges} = props.data.allMarkdownRemark;

	const posts = edges
		.filter((edge) => Boolean(edge.node.frontmatter.date))
		.map((edge) => ({
			id: edge.node.id,
			path: edge.node.fields.slug,
			...edge.node.frontmatter
		}));

	return (
		<Layout>
			{posts.map((post) => (
				<div key={post.id}>
					<Link to={post.path}>
						{post.title} ({post.date})
					</Link>
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
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
