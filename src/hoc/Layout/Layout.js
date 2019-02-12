import React from 'react';
// Context
import { ScreenSizeStore } from '../../contexts/ScreenSizeContext';
// CSS
import classes from './Layout.module.css';
// JSX
import Navbar from '../../containers/Navbar/Navbar';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
//assets
import Background from '../../assets/profile-background.jpeg';
//import footer,
const Layout = (props) => {
	return (
		<ScreenSizeStore>
			<Navbar />
			<ParallaxImage image={Background}>
				<>
					<h1 className={classes.IntroText}>Jorge Baralt</h1>
				</>
			</ParallaxImage>
			<main className={classes.Layout}>{props.children}</main>
		</ScreenSizeStore>
	);
};

export default Layout;
