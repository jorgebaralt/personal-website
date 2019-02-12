/* 
	this context provides 3 things:
		isMobile: bool, whether device is mobile or not,
		width: int, width of the screen,
		height: int, height of the screen
*/
import React from 'react';
// Hooks
import useIsMobile from '../hooks/useIsMobile';
import useGetScreenSize from '../hooks/useGetScreenSize';

const Context = React.createContext();

export const ScreenSizeStore = (props) => {
	// check if the device is a mobile phone, to apply pollyfil
	const isMobile = useIsMobile();
	// get the size of the screen
	const { width, height } = useGetScreenSize();

	//return context
	return (
		<Context.Provider value={{ isMobile, width, height }}>
			{props.children}
		</Context.Provider>
	);
};

export default Context;
