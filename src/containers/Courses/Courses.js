import React from 'react';
import classes from './Courses.module.css';
import FlipCard from '../../components/FlipCard/FlipCard';
import courses from '../../shared/courses';

const renderCourseDescription = (course) => {
	if (course.description) {
		const descriptions = course.description.split('*');
		return descriptions.map((description, i) => (
			<p key={i + course.id} className={classes.BackDescription}>
				•{description}
			</p>
		));
	}
};

const renderCourses = () => {
	const cardBackClass = [classes.Card, classes.BackColor].join(' ');
	return courses.map((course, i) => {
		return (
			<div key={i} className={classes.Course}>
				<div style={{ padding: 40 }}>
					<FlipCard
						front={
							<div className={classes.Card}>
								<img
									className={classes.CardImage}
									src={course.image}
									alt=""
								/>
								<h5 className={classes.CardTitle}>
									{course.name}
								</h5>
								<p>{course.instructor}</p>
								<p>{course.progress}</p>
							</div>
						}
						back={
							<div className={cardBackClass}>
								<h5
									className={[
										classes.CardTitle,
										classes.White,
									].join(' ')}
								>
									{course.name}
								</h5>
								{renderCourseDescription(course)}
							</div>
						}
					/>
				</div>
			</div>
		);
	});
};

const Courses = (props) => {
	return (
		<div>
			<h1 className={classes.Title}>Courses</h1>
			<p className={classes.Subtitle}>
				Courses I have done on my free time
			</p>
			<div className={classes.CoursesContainer}>{renderCourses()}</div>
		</div>
	);
};

export default Courses;
