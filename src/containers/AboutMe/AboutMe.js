import React from 'react';
import classes from './AboutMe.module.css';
import Typing from 'react-typing-animation';

const Projects = () => {
	return (
		<div className={classes.AboutMeContainer}>
			<h1 className={classes.Title}>Hello Everyone, Nice meeting you!</h1>
			<Typing speed={1} cursorClassName="cursor">
				<p className={classes.Text}>
					I started my journey as a software developer around 5 years
					ago. I have a degree in Computer Science from University of
					Central Florida. I love what I do, and spend a lot of time
					doing it. I enjoy working on personal and enterprise
					projects. Currently mobile developer at Deloitte Digital.
					Always looking forward to new opportunities and learn as
					much as possible.
				</p>
			</Typing>
		</div>
	);
};

export default Projects;
