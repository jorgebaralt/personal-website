import React from 'react';
//css
import classes from './Profile.module.css';
import ProfilePic from '../../assets/profile.png';
import { Code, Home, Loading } from '../../assets/SVG';
import HookedParallax from '../../components/HookedParallax/HookedParallax';

const Profile = () => {
	return (
		<div id="profile" className={classes.ProfileContainer}>
			<h1 className={classes.Title}>Mobile & Full Stack Developer</h1>
			<h6 className={classes.Subtitle}>
				I enjoy coding mobile apps 📱 (native ios, android and cross-platform) and web apps 💻
				(usign React and node.js) 🔥
			</h6>
			<img className={classes.ProfilePic} src={ProfilePic} alt="profile pic" />

			<HookedParallax multiplierY={1} style={{ position: 'absolute', bottom: 0, left: 100 }}>
				<div
					style={{
						height: 150,
						width: 150,
						backgroundColor: '#2196f3',
						borderRadius: 20,
						zIndex: -1,
						transform: 'rotate(22deg)',
					}}
				>
					<Home size={40} />
				</div>
			</HookedParallax>
			<HookedParallax multiplierY={1} style={{ position: 'absolute', bottom: -60, left: 200 }}>
				<div
					style={{
						height: 130,
						width: 130,
						backgroundColor: '#90CAF9',
						borderRadius: 20,
						zIndex: -1,
						transform: 'rotate(50deg)',
					}}
				/>
			</HookedParallax>
			<HookedParallax multiplierY={1} style={{ position: 'absolute', bottom: -100, left: 120 }}>
				<div
					style={{
						height: 100,
						width: 100,
						backgroundColor: '#E3F2FD',
						borderRadius: 20,
						zIndex: -1,
						transform: 'rotate(42deg)',
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
