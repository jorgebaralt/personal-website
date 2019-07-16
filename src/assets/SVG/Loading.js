import React from 'react';

export const Loading = (props) => (
	<svg
		className={props.className}
		style={props.style}
		width={props.size ? props.size : '80px'}
		height={props.size ? props.size : '80px'}
	>
		<rect fill="#2196f3" x={21.5} y={53.5} width={25} height={25} rx={3} ry={3}>
			<animate
				attributeName="x"
				calcMode="linear"
				values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5"
				keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
				dur={1.5}
				begin="-1.375s"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="y"
				calcMode="linear"
				values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5"
				keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
				dur={1.5}
				begin="-1s"
				repeatCount="indefinite"
			/>
		</rect>
		<rect fill="#E3F2FD" x={53.5} y={53.5} width={25} height={25} rx={3} ry={3}>
			<animate
				attributeName="x"
				calcMode="linear"
				values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5"
				keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
				dur={1.5}
				begin="-0.875s"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="y"
				calcMode="linear"
				values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5"
				keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
				dur={1.5}
				begin="-0.5s"
				repeatCount="indefinite"
			/>
		</rect>
		<rect fill="#90CAF9" x={28.657} y={21.5} width={25} height={25} rx={3} ry={3}>
			<animate
				attributeName="x"
				calcMode="linear"
				values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5"
				keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
				dur={1.5}
				begin="-0.375s"
				repeatCount="indefinite"
			/>
			<animate
				attributeName="y"
				calcMode="linear"
				values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5"
				keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1"
				dur={1.5}
				begin="0s"
				repeatCount="indefinite"
			/>
		</rect>
	</svg>
);
