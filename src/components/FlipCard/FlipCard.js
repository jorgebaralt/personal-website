import React from 'react';
import classes from './FlipCard.module.css';

const FlipCard = (props) => {
	return (
		<div className={classes.FlipContainer}>
			<div className={classes.Flipper}>
				<div className={classes.Front}>{props.front}</div>
				<div className={classes.Back}>{props.back}</div>
			</div>
		</div>
	);
};

export default FlipCard;
