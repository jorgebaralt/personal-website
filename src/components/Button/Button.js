import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
	const buttonClass = [classes.Button];
	switch (props.color) {
		case 'primary':
			buttonClass.push(classes.Primary);
			break;
		default:
		//do nothing
	}
	return (
		<button
			style={props.style}
			className={buttonClass.join(' ')}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;
