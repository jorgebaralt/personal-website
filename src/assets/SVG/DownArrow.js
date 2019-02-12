import React from 'react';

export const DownArrow = (props) => {
	return (
		<svg
			className={props.className}
			viewBox="0 0 129 129"
			style={props.style}
			width={props.size ? props.size : '24px'}
			height={props.size ? props.size : '24px'}
		>
			<g>
				<g>
					<path
						d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
						data-original="#000000"
						className="active-path"
						data-old_color="#0288d1"
						fill="#0288d1"
					/>
				</g>
			</g>
		</svg>
	);
};
