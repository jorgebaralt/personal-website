import React from 'react';
//css
import classes from './Profile.module.css';
import ProfilePic from '../../assets/profile.png';
import { SmartPhone, Code } from '../../assets/SVG';
import HookedParallax from '../../components/HookedParallax/HookedParallax';

const Profile = () => {
	return (
		<div id="profile" className={classes.ProfileContainer}>
			<h1 className={classes.Title}>Mobile & Full Stack Developer</h1>
			<h6 className={classes.Subtitle}>
				I enjoy coding mobile apps 📱 (native ios, android and
				cross-platform) and web apps💻 (usign React and node.js)🔥
			</h6>
			<img
				className={classes.ProfilePic}
				src={ProfilePic}
				alt="profile pic"
			/>
			{/* <div style={{ height: 100 }} /> */}
			{/* <SmartPhone size={400} className={classes.SmartPhone} /> */}

			<HookedParallax
				multiplierY={0.7}
				style={{ position: 'absolute', bottom: -100, left: 30 }}
			>
				<div
					style={{
						height: 100,
						width: 100,
						backgroundColor: 'red',
					}}
				/>
			</HookedParallax>

			{/* TODO: Move to next component */}
			<div className={classes.Circle}>
				<Code size={170} className={classes.Code} />
			</div>
		</div>
	);
};
export default Profile;
