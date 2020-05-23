import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import {Layout, SEO} from '../components';
import withPostAdapter from '../hocks/withPostAdapter';

function Blog({posts}) {
	return (
		<Layout>
			<SEO title="Блог" link="/blog" />
			{posts.map((post) => (
				<div key={post.id} style={{marginBottom: '20px'}}>
					<Link to={post.link}>
						{post.title} ({post.date})
					</Link>
					<div>{post.excerpt}</div>
				</div>
			))}
		</Layout>
	);
}

Blog.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		excerpt: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired
	}).isRequired).isRequired
};

export const pageQuery = graphql`
	query($langKey: String!) {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] },
			filter: { fields: { langKey: { eq: $langKey } } }
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					fields {
						link
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

export default withPostAdapter(Blog);
