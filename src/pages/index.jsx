import React from 'react';
import {Link} from 'gatsby';
import {Layout} from '../components';
import './index.css';

function Site() {
	return (
		<Layout>
			<div>Blog is <Link to="/blog">here</Link></div>
		</Layout>
	);
}

export default Site;
