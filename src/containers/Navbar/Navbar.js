/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import classes from './Navbar.module.css';
import WindowDataContext from '../../contexts/WindowDataContext';

const Navbar = (props) => {
	const { scrollY } = useContext(WindowDataContext);
	const navbarClass = [classes.TransparentNavbar];
	if (scrollY > 400) {
		navbarClass.push(classes.RegularNavbar);
	}
	// Code to smoth scroll
	return (
		<header className={navbarClass.join(' ')}>
			<div
				style={{
					fontSize: 25,
					fontWeight: '400',
					color: 'white',
				}}
			>
				JB
			</div>
			{/* Check what to render, according to screen size */}
			<div className={classes.NavbarItemsTransparent}>
				{/* Use id for scrolling */}
				<a
					onClick={() =>
						document
							.getElementById('profile')
							.scrollIntoView({ behavior: 'smooth' })
					}
				>
					Profile
				</a>
				<a
					onClick={() =>
						document
							.getElementById('skills')
							.scrollIntoView({ behavior: 'smooth' })
					}
				>
					Skills
				</a>
				<a
					onClick={() =>
						document
							.getElementById('courses')
							.scrollIntoView({ behavior: 'smooth' })
					}
				>
					Courses
				</a>
				<a
					onClick={() =>
						document
							.getElementById('projects')
							.scrollIntoView({ behavior: 'smooth' })
					}
				>
					Projects
				</a>
			</div>
		</header>
	);
};

export default Navbar;
