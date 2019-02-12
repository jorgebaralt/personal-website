import React from 'react';
// Context
import { WindowDataStore } from '../../contexts/WindowDataContext';
// CSS
import classes from './Layout.module.css';
// JSX
import Navbar from '../../containers/Navbar/Navbar';
import ParallaxImage from '../../components/ParallaxImage/ParallaxImage';
//assets
import Background from '../../assets/profile-background.jpeg';
import { DownArrow } from '../../assets/SVG';
//import footer,
const Layout = (props) => {
	return (
		<WindowDataStore>
			<Navbar />
			<ParallaxImage image={Background}>
				<>
					<h1 className={classes.IntroText}>Jorge Baralt</h1>
					{/* TODO: on press move to main class */}
					<DownArrow
						className={classes.FlashArrow}
						size="60px"
						style={{ marginTop: '10vh' }}
					/>
				</>
			</ParallaxImage>
			<main className={classes.Layout}>{props.children}</main>
		</WindowDataStore>
	);
};

export default Layout;
