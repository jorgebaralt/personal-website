import React from 'react';
// Context
import { ScreenSizeStore } from '../../contexts/ScreenSizeContext';
// CSS
import classes from './Layout.module.css';
// JSX
import Navbar from '../../containers/Navbar/Navbar';
//import navbar
//import header,
//import footer,
const Layout = (props) => {
	return (
		<ScreenSizeStore>
			<Navbar />
			<main className={classes.Layout}>{props.children}</main>
		</ScreenSizeStore>
	);
};

export default Layout;
