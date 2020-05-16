import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

function PostLink({post}) {
	return (
		<div>
			<Link to={post.frontmatter.path}>
				{post.frontmatter.title} ({post.frontmatter.date})
			</Link>
		</div>
	);
}

PostLink.propTypes = {
	post: PropTypes.shape({
		frontmatter: PropTypes.shape({
			path: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired
		}).isRequired
	}).isRequired
};

export default PostLink;
