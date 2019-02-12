import React, { Component } from 'react';
// JSX
import Layout from './hoc/Layout/Layout';
import Profile from './containers/Profile/Profile';

class App extends Component {
	render() {
		return (
			<Layout>
				<Profile />
				<div style={{ height: 1000 }} />
			</Layout>
		);
	}
}

export default App;
