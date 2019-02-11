/* 
	this hook checks if we are on a mobile device, and applies smoothscroll.polyfill to the dom.
	Also, returns a boolean of the result
*/
import { useState, useEffect } from 'react';
import { checkIsMobile } from '../shared/checkIsMobile';
import smoothscroll from 'smoothscroll-polyfill';

// TODO: pass function to apply as props, that way users can apply their own functions if it is mobiel
const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		// check if it is mobile
		if (checkIsMobile()) {
			smoothscroll.polyfill();
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return isMobile;
};

export default useIsMobile;
