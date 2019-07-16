import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Loading } from './assets/SVG';
// import App from './App';
import * as serviceWorker from './serviceWorker';
const App = lazy(
	() =>
		new Promise((resolve, reject) => {
			setTimeout(() => resolve(import('./App')), 1000);
		})
);
// react router dom

ReactDOM.render(
	<Suspense
		fallback={
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: window.innerHeight,
					width: window.innerWidth,
				}}
			>
				<Loading multiplier={2} />
			</div>
		}
	>
		<div>
			<App />
		</div>
	</Suspense>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
