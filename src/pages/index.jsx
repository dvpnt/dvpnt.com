import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {Layout, PostLink} from '../components';
import './index.css';

function Home({data}) {
	const Posts = data.allMarkdownRemark.edges
		.filter((edge) => Boolean(edge.node.frontmatter.date))
		.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

	return (
		<Layout>
			<div>{Posts}</div>
		</Layout>
	);
}

Home.propTypes = {
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
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
					}
				}
			}
		}
	}
`;

export default Home;
