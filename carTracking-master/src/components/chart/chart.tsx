import { ChartContainer } from './chart.styled';
import { useEffect, useState } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import fetchDataFromThingSpeak from '../../utilities/fetchDataFromThingSpeak';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

interface Feeds {
	created_at: string;
	entry_id: number;
	field1: string;
	field2: string;
	field3: string;
	field4: string;
	field5: string;
	field6: string;
	field7: string;
	field8: string;
}

const Chart = () => {
	useEffect(() => {
		const fetchFeeds = async () => {
			try {
				const feeds = await fetchDataFromThingSpeak();
				const feedLength = feeds.length;
				// const { field4, field6, field7, field8 } = feeds[feedLength - 1];
				console.log(feeds);
				const fuel = feeds
					.map((feed: Feeds) => feed.field4)
					.reverse()
					.slice(0, 20);
				const time = feeds
					.map((feed: Feeds) => feed.field8)
					.reverse()
					.slice(0, 20);
				setFuelLevels(fuel);
				setTimeValues(time);

				console.log(fuel);
				console.log(time);
			} catch (e) {
				console.log('Error fetching feed');
			}
		};
		fetchFeeds();

		// Fetch data every 10 seconds and update the marker position
		const interval = setInterval(fetchFeeds, 2000);

		// Clean up the interval on component unmount
		return () => clearInterval(interval);
	}, []);

	const [fuelLevels, setFuelLevels] = useState([]);
	const [timeValues, setTimeValues] = useState([]);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const
			},
			title: {
				display: true,
				text: 'Fuel level against time'
			}
		}
	};

	const labels = timeValues;

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: fuelLevels,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			}
		]
	};

	return (
		<ChartContainer>
			<Line options={options} data={data} />
		</ChartContainer>
	);
};

export default Chart;
