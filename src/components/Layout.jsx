import React from 'react';
import PropTypes from 'prop-types';

function Layout({children}) {
	return (
		<>
			<header>Header</header>
			<main>{children}</main>
			<footer>Footer</footer>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
