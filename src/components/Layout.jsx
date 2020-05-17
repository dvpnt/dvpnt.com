import React from 'react';
import PropTypes from 'prop-types';

function Layout({children}) {
	return (
		<>
			<header>Header</header>
			<main style={{maxWidth: '800px', margin: '0 auto'}}>{children}</main>
			<footer>Footer</footer>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
