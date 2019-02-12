import React from 'react';

export const Phone = (props) => {
	return (
		<svg
			viewBox="0 0 35 35"
			className={props.className}
			style={props.style}
			width={props.size ? props.size : '24px'}
			height={props.size ? props.size : '24px'}
		>
			<path
				d="M25.302 0H9.698a2.37 2.37 0 0 0-2.364 2.364v30.271A2.371 2.371 0 0 0 9.698 35h15.604a2.37 2.37 0 0 0 2.364-2.364V2.364A2.37 2.37 0 0 0 25.302 0zM15.004 1.704h4.992a.286.286 0 0 1 0 .573h-4.992a.286.286 0 1 1 0-.573zM17.5 33.818a1.182 1.182 0 1 1 0-2.364 1.182 1.182 0 0 1 0 2.364zm8.521-3.193H8.979V3.749h17.042v26.876z"
				data-original="#000000"
				className="active-path"
				data-old_color="#1565c0"
				fill="#1565c0"
			/>
		</svg>
	);
};
