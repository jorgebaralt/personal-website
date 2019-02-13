import React, { Component } from 'react';
// JSX
import Layout from './hoc/Layout/Layout';
import Profile from './containers/Profile/Profile';
import AboutMe from './containers/AboutMe/AboutMe';
import Skills from './containers/Skills/Skills';
import Courses from './containers/Courses/Courses';

class App extends Component {
	render() {
		return (
			<Layout>
				<Profile />
				<AboutMe />
				<Skills />
				<Courses />
			</Layout>
		);
	}
}

export default App;
