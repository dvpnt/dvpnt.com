import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import {Layout} from '../components';

function Post({data, pageContext}) {
	const {markdownRemark} = data;
	const {frontmatter, html} = markdownRemark;
	const {translations} = pageContext;

	return (
		<Layout>
			<h1>{frontmatter.title}</h1>
			<h2>{frontmatter.date}</h2>
			{Boolean(translations.length) && (
				<div style={{background: '#eee', padding: '15px 20px'}}>
					Доступные переводы: {' '}
					{translations.map(({langKey, slug}) => (
						<Link key={slug} to={`/blog/${slug}`}>{langKey}</Link>
					))}
				</div>
			)}
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
	}).isRequired,
	pageContext: PropTypes.shape({
		translations: PropTypes.array.isRequired
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
