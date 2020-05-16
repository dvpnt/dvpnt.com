import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

function BlogTemplate({data}) {
	const {markdownRemark} = data;
	const {frontmatter, html} = markdownRemark;

	return (
		<div>
			<h1>{frontmatter.title}</h1>
			<h2>{frontmatter.date}</h2>
			<div dangerouslySetInnerHTML={{__html: html}} />
		</div>
	);
}

BlogTemplate.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
			html: PropTypes.any
		}).isRequired
	}).isRequired
};

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`;

export default BlogTemplate;