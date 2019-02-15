import React from 'react';
import classes from './Hamburger.module.css';

const Hamburger = (props) => {
	// TODO: props.type to select which one ()

	// FIXME: props.active

	const hamburgerClass = [classes.Hamburger];
	if (props.active) {
		hamburgerClass.push(classes.Open);
	}

	return (
		<div className={hamburgerClass.join(' ')} onClick={props.onClick}>
			<div />
		</div>
	);
};

export default Hamburger;
