import React from 'react';
import classes from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<header className={classes.TransparentNavbar}>
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
			<div className={classes.NavbarItems}>
				<a href="#">Profile</a>
				<a href="#">Projects</a>
				<a href="#">Skills</a>
				<a href="#">Education</a>
			</div>
		</header>
	);
};

export default Navbar;
