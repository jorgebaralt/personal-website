import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// JSX
import Layout from './hoc/Layout/Layout';
import Portfolio from './containers/Portfolio/Portfolio';

class App extends Component {
	render() {
		return (
			<Layout>
				{/* decide what to render */}
				<Switch>
					<Route exact path="/" component={Portfolio} />
				</Switch>
			</Layout>
		);
	}
}

export default App;
