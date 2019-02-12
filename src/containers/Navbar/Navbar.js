import React, { useContext } from 'react';
import classes from './Navbar.module.css';
import WindowDataContext from '../../contexts/WindowDataContext';

const Navbar = (props) => {
	const { scrollY } = useContext(WindowDataContext);
	const navbarClass = [classes.TransparentNavbar];
	if (scrollY > 400) {
		navbarClass.push(classes.RegularNavbar);
	}
	return (
		<header className={navbarClass.join(' ')}>
			<div
				style={{
					fontSize: 25,
					fontWeight: '400',
					color: 'white',
				}}
			>
				LOGO HERE
			</div>
			{/* Check what to render, according to screen size */}
			<div className={classes.NavbarItemsTransparent}>
				<a href="#">Profile</a>
				<a href="#">Projects</a>
				<a href="#">Skills</a>
				<a href="#">Education</a>
			</div>
		</header>
	);
};

export default Navbar;
