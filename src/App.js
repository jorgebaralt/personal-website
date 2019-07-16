import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Profile from './containers/Profile/Profile';
import AboutMe from './containers/AboutMe/AboutMe';
import Skills from './containers/Skills/Skills';
import Courses from './containers/Courses/Courses';
import Projects from './containers/Projects/Projects';
import Footer from './components/Footer/Footer';
// import Profile from './containers/Profile/Profile';
// JSX

class App extends Component {
	componentDidMount() {
		document.body.style.overflowX = 'hidden';
	}
	render() {
		return (
			<Layout>
				<Profile />
				<AboutMe />
				<Skills />
				<Courses />
				<Projects />
				<Footer />
			</Layout>
		);
	}
}

export default App;
