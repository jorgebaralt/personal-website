/* 
	this context provides 3 things:
		isMobile: bool, whether device is mobile or not,
		width: int, width of the screen,
		height: int, height of the screen
*/
import React from 'react';
// Hooks
import useIsMobile from '../hooks/useIsMobile';
import useGetWindowData from '../hooks/useGetWindowData';

const Context = React.createContext();

export const WindowDataStore = (props) => {
	// check if the device is a mobile phone, to apply pollyfil
	const isMobile = useIsMobile();
	// get the size of the screen
	const { width, height, scrollY } = useGetWindowData();

	//return context
	return (
		<Context.Provider value={{ isMobile, width, height, scrollY }}>
			{props.children}
		</Context.Provider>
	);
};

export default Context;
