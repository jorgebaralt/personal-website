import React from 'react';

export const AppStore = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 291.32 291.32"
			className={props.className}
			style={props.style}
			width={props.size ? props.size : '24px'}
			height={props.size ? props.size : '24px'}
		>
			<path
				d="M145.66,0C65.21,0,0,65.21,0,145.66c0,80.431,65.21,145.66,145.66,145.66 s145.66-65.219,145.66-145.66S226.109,0,145.66,0z M145.66,264.008c-65.365,0-118.348-52.984-118.348-118.348 S80.295,27.311,145.66,27.311S264.008,80.295,264.008,145.66S211.024,264.008,145.66,264.008z M144.986,104.711 c1.029-1.839,0.41-4.188-1.393-5.253l-9.868-5.726c-1.803-1.056-4.142-0.419-5.171,1.411l-15.121,26.692l-16.669,29.396 l-13.91,24.544c-1.038,1.83-0.41,4.188,1.393,5.226l9.868,5.744c1.803,1.056,4.133,0.419,5.18-1.402l19.327-34.112l12.49-22.04 C131.112,129.191,144.986,104.711,144.986,104.711z M137.138,136.592l-15.176,27.366h53.566l-13.656-27.366 C161.873,136.592,137.138,136.592,137.138,136.592z M93.477,136.592H72.83c-5.025,0-9.104,4.088-9.104,9.122v9.131 c0,5.034,4.078,9.113,9.104,9.113h4.261C77.09,163.958,93.477,136.592,93.477,136.592z M90.873,191.151l-9.859-5.735 c-1.803-1.047-3.469-0.182-3.714,1.903l-1.711,15.039c-0.237,2.094,0.974,2.849,2.704,1.666l12.736-8.794 C92.758,194.037,92.694,192.198,90.873,191.151z M198.598,151.604l-0.2-0.373l-6.227-11.99l-0.118-0.209l-0.701-1.366l-0.528-0.992 l-0.446-0.874l-0.819-1.566l-0.255-0.482l-0.929-1.793l-0.273-0.528c-6.955-13.301-15.686-29.696-21.066-38.308 c-9.422-15.103-22.013-40.257-25.527-38.481c-4.925,2.485,10.315,34.43,15.358,46.438c5.043,11.999,24.726,58.009,28.668,60.012 c3.942,2.003,5.48,0.892,8.111-0.209C196.294,159.761,201.01,156.074,198.598,151.604z M218.489,136.592h-19.4l15.613,27.366h3.787 c5.034,0,9.104-4.078,9.104-9.113v-9.131C227.593,140.68,223.524,136.592,218.489,136.592z M209.85,175.319l-4.698-9.14 c-1.065-2.067-3.569-2.913-5.562-1.875l-5.663,2.95c-1.994,1.038-2.622,3.496-1.393,5.471l5.945,9.513 c1.229,1.966,3.814,2.613,5.744,1.42l4.042-2.458C210.196,180.035,210.906,177.377,209.85,175.319z M208.402,188.529 c-1.475,1.447-4.989,4.561-0.737,10.624c4.242,6.063,13.728,6.336,14.985,10.36C222.641,209.513,225.617,178.706,208.402,188.529z"
				fill="#26a6d1"
			/>
		</svg>
	);
};