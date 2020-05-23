import React from 'react';
import {Link} from 'gatsby';
import {Layout, SEO} from '../components';
import './index.scss';

function Site() {
	return (
		<Layout>
			<SEO />
			<div>Blog is <Link to="/blog">here</Link></div>
		</Layout>
	);
}

export default Site;
