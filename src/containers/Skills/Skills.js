import React from 'react';
import classes from './Skills.module.css';
import { Phone, Web, BackEnd } from '../../assets/SVG';

const Skills = () => {
	const subtitleClass = [classes.ToolTitle];
	return (
		<div className={classes.Container}>
			<div className={classes.SkillContainer}>
				<div className={classes.Skill}>
					<div style={{ padding: 40 }}>
						<Phone size="80px" />
						<h5 className={classes.SkillTitle}>
							Mobile Development
						</h5>
						<p className={classes.SkillDescription}>
							I love bringing to life any idea.
						</p>
						<p className={subtitleClass.join(' ')}>
							Tools & Skills
						</p>
						<div className={classes.ToolsContainer}>
							<p className={classes.Tool}>React Native</p>
							<p className={classes.Tool}>Javascript</p>
							<p className={classes.Tool}>iOS</p>
							<p className={classes.Tool}>Swift</p>
							<p className={classes.Tool}>Android</p>
							<p className={classes.Tool}>Java</p>
							<p className={classes.Tool}>Appcelerator</p>
							<p className={classes.Tool}>Version Control</p>
							<p className={classes.Tool}>Xcode</p>
						</div>
					</div>
				</div>
				<div className={classes.Skill}>
					<div style={{ padding: 40 }}>
						<Web size="80px" />
						<h5 className={classes.SkillTitle}>Web development</h5>
						<p className={classes.SkillDescription}>
							I love coding it from scratch using new technology
						</p>
						<p className={subtitleClass.join(' ')}>
							Tools & Skills
						</p>
						<div className={classes.ToolsContainer}>
							<p className={classes.Tool}>HTML</p>
							<p className={classes.Tool}>CSS</p>
							<p className={classes.Tool}>React.js</p>
							<p className={classes.Tool}>Router-dom</p>
							<p className={classes.Tool}>Next.js</p>
							<p className={classes.Tool}>Redux</p>
							<p className={classes.Tool}>VSCode</p>
							<p className={classes.Tool}>Github</p>
							<p className={classes.Tool}>Terminal</p>
						</div>
					</div>
				</div>
				<div className={classes.Skill}>
					<div style={{ padding: 40 }}>
						<BackEnd size="80px" />
						<h5 className={classes.SkillTitle}>Backend</h5>
						<p className={classes.SkillDescription}>
							Enjoy connecting my apps through the same API.
						</p>
						<p className={subtitleClass.join(' ')}>Tools & Skill</p>
						<div className={classes.ToolsContainer}>
							<p className={classes.Tool}>MYSQL</p>
							<p className={classes.Tool}>MongoDB</p>
							<p className={classes.Tool}>Firebase</p>
							<p className={classes.Tool}>Node.js</p>
							<p className={classes.Tool}>Express</p>
							<p className={classes.Tool}>Hosting</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
