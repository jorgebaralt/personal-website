import React, { useState } from 'react';
import classes from './CardFade.module.css';

const CardFade = (props) => {
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
			className={classes.Card}
			onMouseEnter={() => {
				setHover(true);
			}}
			onMouseLeave={() => {
				setHover(false);
			}}
		>
			{/* Front */}
			<div
				className={frontClass.join(' ')}
				// style={{ backgroundImage: `url(${props.frontImg})` }}
			>
				{props.front}
			</div>
			{/* Back */}
			<div className={backClass.join(' ')}>{props.back}</div>
		</div>
	);
};

export default CardFade;
