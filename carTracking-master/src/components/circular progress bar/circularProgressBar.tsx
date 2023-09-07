import * as circularProgressBarStyle from './circularProgressBar.styled';
import { useState } from 'react';
import { Progress, Tooltip } from 'antd';

const CircularProgressBar = ({ fuelLevel }: { fuelLevel: number }) => {
	// const [percentage, setPecentage] = useState(63)
	const pathColor = {
		'0%': '#108ee9',
		'50%': 'yellow',
		'100%': '#87d068'
	};

	return (
		<>
			<circularProgressBarStyle.Main>
				<circularProgressBarStyle.FuelLevel>
					Fuel Level
				</circularProgressBarStyle.FuelLevel>
				<circularProgressBarStyle.Level>
					{fuelLevel}
				</circularProgressBarStyle.Level>
				<Progress
					type='circle'
					percent={fuelLevel}
					showInfo={false}
					strokeColor={pathColor}
					size={70}
					strokeWidth={15}
				/>
				<circularProgressBarStyle.Units>Liters</circularProgressBarStyle.Units>
			</circularProgressBarStyle.Main>
		</>
	);
};

export default CircularProgressBar;
