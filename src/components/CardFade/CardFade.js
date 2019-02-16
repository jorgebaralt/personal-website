import React, { useState } from 'react';
import classes from './CardFade.module.css';

const CardFade = (props) => {
	if (!props.front || !props.back) {
		return null;
	}
	const [isHover, setHover] = useState(false);

	const backClass = [classes.Content];
	const frontClass = [classes.Content];

	if (isHover) {
		backClass.push(classes.Visible);
		frontClass.push(classes.NotVisible);
	} else {
		backClass.push(classes.NotVisible);
		frontClass.push(classes.Visible);
	}

	return (
		<div
			style={props.style}
			className={[classes.Card, props.className].join(' ')}
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={() => {
				setHover(false);
			}}
			onFocus={() => {
				setHover(true);
			}}
			onBlur={() => {
				setHover(false);
			}}
			style={props.style}
		>
			{/* Front */}
			<div className={frontClass.join(' ')}>{props.front}</div>
			{/* Back */}
			<div className={backClass.join(' ')}>{props.back}</div>
		</div>
	);
};

export default CardFade;
