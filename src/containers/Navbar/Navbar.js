/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import classes from './Navbar.module.css';
import WindowDataContext from '../../contexts/WindowDataContext';
import Hamburger from '../../components/Hamburger/Hamburger';

const Navbar = (props) => {
	const { scrollY, width } = useContext(WindowDataContext);

	const [drawerOpen, setDrawerOpen] = useState(false);

	//styling
	const drawerClass = [classes.Dropdown];
	let navbarClass = [];
	const dropdownItemClass = [classes.DropdownItem];
	if (drawerOpen) {
		drawerClass.push(classes.ShowDropdown);
		navbarClass.push(classes.RegularNavbar);
		dropdownItemClass.push(classes.ShowDropdownItem);
	} else {
		navbarClass = [classes.TransparentNavbar];
	}
	// in case we want the navbar sticky (stay on top)
	// if (scrollY > 400) {
	// 	navbarClass.push(classes.RegularNavbar);
	// }

	return (
		<header className={classes.Header}>
			<div className={navbarClass.join(' ')}>
				{' '}
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
				{width > 992 ? (
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
				) : (
					<>
						<Hamburger
							active={drawerOpen}
							onClick={() => {
								setDrawerOpen(!drawerOpen);
							}}
						/>
					</>
				)}
			</div>
			<div className={drawerClass.join(' ')}>
				<a
					className={dropdownItemClass.join(' ')}
					onClick={() => {
						setDrawerOpen(false);
						document
							.getElementById('profile')
							.scrollIntoView({ behavior: 'smooth' });
					}}
				>
					Profile
				</a>
				<a
					className={dropdownItemClass.join(' ')}
					onClick={() => {
						setDrawerOpen(false);
						document
							.getElementById('skills')
							.scrollIntoView({ behavior: 'smooth' });
					}}
				>
					Skills
				</a>
				<a
					className={dropdownItemClass.join(' ')}
					onClick={() => {
						setDrawerOpen(false);
						document
							.getElementById('courses')
							.scrollIntoView({ behavior: 'smooth' });
					}}
				>
					Courses
				</a>
				<a
					className={dropdownItemClass.join(' ')}
					onClick={() => {
						setDrawerOpen(false);
						document
							.getElementById('projects')
							.scrollIntoView({ behavior: 'smooth' });
					}}
				>
					Projects
				</a>
			</div>
		</header>
	);
};

export default Navbar;
