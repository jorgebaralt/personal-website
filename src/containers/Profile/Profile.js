import React from 'react';
//css
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<>
			<div className={classes.ProfileContainer}>
				<h1 className={classes.Title}>Mobile & Full Stack Developer</h1>
				<h6 className={classes.Subtitle}>
					I enjoy coding mobile apps (native ios, android and
					cross-platform) and web apps (usign React and node.js)
				</h6>
			</div>
		</>
	);
};
export default Profile;
