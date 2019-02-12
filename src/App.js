import React, { Component } from 'react';
// JSX
import Layout from './hoc/Layout/Layout';
import Profile from './containers/Profile/Profile';
import AboutMe from './containers/AboutMe/AboutMe';
import Skills from './containers/Skills/Skills';

class App extends Component {
	render() {
		return (
			<Layout>
				<Profile />
				<AboutMe />
				<Skills />
			</Layout>
		);
	}
}

export default App;
