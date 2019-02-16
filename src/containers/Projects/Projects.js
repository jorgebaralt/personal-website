import React from 'react';
import classes from './Projects.module.css';
// components
import CardFade from '../../components/CardFade/CardFade';
import Button from '../../components/Button/Button';
// data
import projects from '../../shared/projects';
// SVG
import { Youtube, PlayStore, AppStore, Github } from '../../assets/SVG';

const renderProjects = () => {
	return projects.map((project) => {
		return (
			<div key={project.name} className={classes.Project}>
				<CardFade
					front={
						<div className={classes.Front}>
							<img
								className={classes.FrontImg}
								src={project.image}
								alt=""
							/>
							<div className={classes.ImgText}>
								{project.name}
							</div>
						</div>
					}
					back={
						<div className={classes.Back}>
							<h3>{project.name}</h3>
							<p style={{ width: '80%' }}>
								{project.description}
							</p>
							{project.website ? (
								<Button
									color="primary"
									style={{ marginTop: 20 }}
									onClick={() =>
										window.open(project.website, '_blank')
									}
								>
									<p>
										Website
										<i
											style={{ marginLeft: 10 }}
											className="fas fa-angle-right"
										/>
									</p>
								</Button>
							) : null}
							<div className={classes.Resources}>
								{project.ios ? (
									<AppStore
										size={30}
										onClick={() =>
											window.open(project.ios, '_blank')
										}
										className={classes.Resource}
									/>
								) : null}
								{project.android ? (
									<PlayStore
										size={30}
										onClick={() =>
											window.open(
												project.android,
												'_blank'
											)
										}
										className={classes.Resource}
									/>
								) : null}
								{project.youtube ? (
									<Youtube
										size={30}
										onClick={() =>
											window.open(
												project.youtube,
												'_blank'
											)
										}
										className={classes.Resource}
									/>
								) : null}
								{project.github ? (
									<Github
										size={30}
										onClick={() =>
											window.open(
												project.github,
												'_blank'
											)
										}
										className={classes.Resource}
									/>
								) : null}
							</div>
						</div>
					}
				/>
			</div>
		);
	});
};
const Projects = () => {
	return (
		<div id="projects">
			<div className={classes.Container}>
				<h1 className={classes.Title}>My Projects</h1>
				<p className={classes.Text}>
					During my degree, I was part of many team projects. I have
					also worked on personal projects on my free time. Have been
					part of multiple projects during my career at Deloitte.
				</p>
			</div>
			<div className={classes.ProjectContainer}>{renderProjects()}</div>
		</div>
	);
};

export default Projects;
