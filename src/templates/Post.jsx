import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {Layout} from '../components';

function Post({data}) {
	const {markdownRemark} = data;
	const {frontmatter, html} = markdownRemark;

	return (
		<Layout>
			<h1>{frontmatter.title}</h1>
			<h2>{frontmatter.date}</h2>
			<div dangerouslySetInnerHTML={{__html: html}} />
		</Layout>
	);
}

Post.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
			html: PropTypes.any
		}).isRequired
	}).isRequired
};

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
			}
		}
	}
`;

export default Post;
