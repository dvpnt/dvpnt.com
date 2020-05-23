import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import {Layout, SEO} from '../components';

function Post({data, pageContext}) {
	const {markdownRemark} = data;
	const {frontmatter, html, fields} = markdownRemark;
	const {slug, translations} = pageContext;

	return (
		<Layout>
			<SEO
				lang={fields.langKey}
				title={frontmatter.title}
				// description={post.frontmatter.spoiler}
				slug={slug}
			/>
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
			fields: PropTypes.object,
			html: PropTypes.any
		}).isRequired
	}).isRequired,
	pageContext: PropTypes.shape({
		slug: PropTypes.string.isRequired,
		translations: PropTypes.array.isRequired
	}).isRequired
};

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			fields {
				langKey
			}
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
			}
		}
	}
`;

export default Post;
