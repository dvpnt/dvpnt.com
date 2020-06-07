import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

function Layout({children}) {
	return (
		<>
			<header>Header</header>
			<main>
				<Container>
					{children}
				</Container>
			</main>
			<footer>Footer</footer>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
