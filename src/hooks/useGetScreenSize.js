/* 
	this Hook, will always listen to resizes of the screen, 
	and provide the result (width, height) as consumer to all children
*/
import { useState, useEffect } from 'react';

const useGetScreenSize = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	// on mount, add window event listener for screen change
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		});
		return function cleanup() {
			window.removeEventListener('resize');
		};
	}, []);

	return { width, height };
};

export default useGetScreenSize;
