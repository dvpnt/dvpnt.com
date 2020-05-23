import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

function markdownRemarkToPost(markdownRemark) {
	return {
		..._.pick(markdownRemark, 'id', 'excerpt', 'html'),
		...markdownRemark.frontmatter,
		...markdownRemark.fields
	};
}

export default (WrappedComponent) => {
	function Adapter({data, pageContext}) {
		const {allMarkdownRemark, markdownRemark} = data;
		const post = markdownRemark && markdownRemarkToPost(markdownRemark);
		const posts = allMarkdownRemark &&
			allMarkdownRemark.edges.map(({node}) => markdownRemarkToPost(node));

		return (
			<WrappedComponent
				translations={pageContext.translations || []}
				langKey={pageContext.langKey}
				link={pageContext.link}
				{...posts && {posts}}
				{...post}
			/>
		);
	}

	Adapter.propTypes = {
		data: PropTypes.any.isRequired,
		pageContext: PropTypes.any.isRequired,
		markdownRemark: PropTypes.any,
		allMarkdownRemark: PropTypes.any
	};

	Adapter.defaultProps = {
		markdownRemark: null,
		allMarkdownRemark: null
	};

	Adapter.WrappedComponent = WrappedComponent;

	return Adapter;
};
