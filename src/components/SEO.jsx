import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import {defaultLanguage} from '../../i18n';

function SEO({description, lang, meta, title, link}) {
	const {site} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
					}
				}
			}
		`
	);

	const {siteMetadata} = site;
	const metaTitle = title || siteMetadata.title;
	const metaDescription = description || siteMetadata.description;
	const metaUrl = `${siteMetadata.siteUrl}${link}`;

	return (
		<Helmet
			htmlAttributes={{lang}}
			title={metaTitle}
			titleTemplate={title && `%s — ${siteMetadata.title}`}
			meta={[
				{
					name: 'description',
					content: metaDescription
				},
				{
					property: 'og:url',
					content: metaUrl
				},
				{
					property: 'og:title',
					content: metaTitle
				},
				{
					property: 'og:description',
					content: metaDescription
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					name: 'twitter:card',
					content: 'summary'
				},
				{
					name: 'twitter:creator',
					content: siteMetadata.author
				},
				{
					name: 'twitter:title',
					content: metaTitle
				},
				{
					name: 'twitter:description',
					content: metaDescription
				}
			].concat(meta)}
		/>
	);
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object)
};

SEO.defaultProps = {
	title: '',
	description: '',
	link: '',
	lang: defaultLanguage,
	meta: []
};

export default SEO;
