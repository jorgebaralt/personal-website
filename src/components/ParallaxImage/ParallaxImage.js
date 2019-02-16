import React from 'react';
import classes from './ParallaxImage.module.css';

const ParallaxImage = (props) => {
	return (
		<div className={classes.Parallax}>
			<div className={classes.Background}>
				<img
					className={classes.Img}
					src={props.image}
					draggable="false"
					alt=" "
				/>
			</div>
			{/* If we are passing children prop, then we will need */}
			{props.children ? (
				// After parallax, view has to be relative, so it doesnt show this content anywehere on screen
				<div className={classes.ParallaxContainer}>
					{props.children}
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default ParallaxImage;
