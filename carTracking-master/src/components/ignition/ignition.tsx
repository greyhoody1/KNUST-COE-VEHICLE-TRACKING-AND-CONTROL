import React, { useEffect, useState } from 'react';
import * as ignitionStyle from './ignition.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import fetchDataFromThingSpeak from '../../utilities/fetchDataFromThingSpeak';

const Ignition = (params: any) => {
	// const [data, setData] = useState(null); // State to hold the fetched data
	const [indicator, setIndicator] = useState<number>();

	// Function to fetch data from ThingSpeak API

	useEffect(() => {
		const fetchFeeds = async () => {
			try {
				const feeds = await fetchDataFromThingSpeak();
				const feedLength = feeds.length;
				const { field5 } = feeds[feedLength - 1];
				setIndicator(Number(field5));
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

	const handleClick = async () => {
		// Make an API request to turn off the indicator
		try {
			const response = await fetch(
				'https://api.thingspeak.com/update?api_key=DBVVXP0CM0BXL2S9&field1=1&field2=1&field3=1&field5=0'
			);
			console.log(response);
		} catch (error) {
			console.error('Error updating indicator state:', error);
		}
	};

	return (
		<>
			<ignitionStyle.Main>
				<ignitionStyle.BackIcon
					onClick={() => {
						params.setIgnition(!params.toggleIgnition);
						params.setToggleMenu(true);
					}}
				>
					<AiOutlineArrowLeft size='25px' />
				</ignitionStyle.BackIcon>
				<ignitionStyle.Title>Ignition</ignitionStyle.Title>

				<div id='data-container' className='flex gap-4 items-center'>
					<div
						className={`${
							indicator === 1 ? 'bg-red-600' : 'bg-gray-500'
						} w-24 h-24 flex justify-center items-center shadow text-white text-center border border-black`}
					>
						{indicator === 1 ? 'ON' : 'OFF'}
					</div>
					<button
						className=' bg-gray-500 inline-block w-32 h-32 shadow text-white text-center rounded-full'
						onClick={handleClick}
					>
						Press to turn off
					</button>
				</div>
			</ignitionStyle.Main>
		</>
	);
};

export default Ignition;
