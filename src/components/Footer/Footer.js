import React from 'react';
import classes from './Footer.module.css';
import Button from '../../components/Button/Button';
import { Linkedin, Github, Email } from '../../assets/SVG';

const Footer = () => {
	return (
		<div className={classes.Footer}>
			<div className={classes.FloatingCard}>
				<div className={classes.Item}>
					<h1>Interested?</h1>
				</div>
				<div className={classes.Item}>
					<p style={{ paddingLeft: 20, paddingRight: 20 }}>
						Feel free to contact me to discuss about any partnership
						or investment opportunities
					</p>
				</div>
				<div className={classes.Item}>
					<Button
						color="primary"
						style={{
							fontSize: 20,
							paddingLeft: 20,
							paddingRight: 20,
							paddingTop: 5,
							paddingBottom: 5,
						}}
						onClick={() =>
							window.open(
								'https://mail.google.com/mail/?view=cm&fs=1&to=jorgebaraltq@gmail.com&su=&body=',
								'_blank'
							)
						}
					>
						Contact me
					</Button>
				</div>
			</div>
			<div className={classes.Container}>
				<p className={classes.Slogan}>
					Coding, Learning, and Improving
				</p>
				<div className={classes.SVGs}>
					<Github
						size={40}
						onClick={() =>
							window.open(
								'https://github.com/jorgebaralt',
								'_blank'
							)
						}
						className={classes.SVG}
					/>

					<Linkedin
						onClick={() =>
							window.open(
								'https://www.linkedin.com/in/jorgebaralt/',
								'_blank'
							)
						}
						size={40}
						className={classes.SVG}
					/>
					<Email
						className={classes.SVG}
						onClick={() =>
							window.open(
								'https://mail.google.com/mail/?view=cm&fs=1&to=jorgebaraltq@gmail.com&su=&body=',
								'_blank'
							)
						}
						size={40}
					/>
				</div>
				<p style={{ marginTop: 30, fontSize: 12 }}>
					©2019 Jorge Baralt.
				</p>
			</div>
		</div>
	);
};

export default Footer;
