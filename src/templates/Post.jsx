import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';
import {Layout, SEO} from '../components';
import withPostAdapter from '../hocks/withPostAdapter';

function Post(props) {
	return (
		<Layout>
			<SEO
				title={props.title}
				description={props.description}
				lang={props.langKey}
				link={props.link}
			/>
			<h1>{props.title}</h1>
			<h2>{props.date}</h2>
			{Boolean(props.translations.length) && (
				<div style={{background: '#eee', padding: '15px 20px'}}>
					Доступные переводы: {' '}
					{props.translations.map(({langKey, link}) => (
						<Link key={link} to={link}>{langKey}</Link>
					))}
				</div>
			)}
			<div dangerouslySetInnerHTML={{__html: props.html}} />
		</Layout>
	);
}

Post.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	langKey: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	html: PropTypes.string.isRequired,
	translations: PropTypes.arrayOf(PropTypes.object).isRequired
};

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			fields {
				langKey
				link
			}
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
			}
		}
	}
`;

export default withPostAdapter(Post);
