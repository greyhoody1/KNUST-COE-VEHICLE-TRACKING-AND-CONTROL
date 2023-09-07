import * as bottomContainerStyle from './bottomContainer.styled';
import { BiTime } from 'react-icons/bi';
import { icons } from '../../assets/index';
import { Fragment } from 'react';
import CircularProgressBar from '../circular progress bar/circularProgressBar';
import { useState, useEffect } from 'react';

import fetchDataFromThingSpeak from '../../utilities/fetchDataFromThingSpeak';

interface carInfoInterface {
	carNumber: string;
	digits: string;
	date: string;
	carName: string;
	moreCarInfo: [
		{
			property: string;
			amount: string;
			unit: string;
		},
		{
			property: string;
			amount: string;
			unit: string;
		},
		{
			property: string;
			amount: string;
			unit: string;
		}
	];
}

const BottomContainer = () => {
	useEffect(() => {
		const fetchFeeds = async () => {
			try {
				const feeds = await fetchDataFromThingSpeak();
				const feedLength = feeds.length;
				const { field4, field6, field7, field8 } = feeds[feedLength - 1];
				setSpeed(field6);
				setDate(field7);
				setTime(field8);
				setFuelLevel(Number(field4));
				console.log(field6);
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

	const [speed, setSpeed] = useState('');
	const [time, setTime] = useState('');
	const [date, setDate] = useState('');
	const [fuelLevel, setFuelLevel] = useState(0);
	const distance = (Number(speed) * Number(time)).toString();

	const [toggleSeeMore, setToggleSeeMore] = useState(true);

	const carInfo: carInfoInterface[] = [
		{
			carNumber: 'GN 4343-22',
			digits: 'CN2343546546576767',
			date,
			carName: 'Lamborghini',
			moreCarInfo: [
				{
					property: 'Speed',
					amount: speed,
					unit: 'km/h'
				},
				{
					property: 'Distance',
					amount: distance,
					unit: 'kms'
				},
				{
					property: 'Time',
					amount: time,
					unit: 'hrs'
				}
			]
		}
	];

	const seeMoreClick = () => {
		setToggleSeeMore(!toggleSeeMore);
	};
	let verticalLineCount = 0;

	return (
		<>
			{carInfo.map((carInfoMap, index: number) => {
				return (
					<bottomContainerStyle.Main key={index}>
						<bottomContainerStyle.Top>
							<bottomContainerStyle.CarNumber>
								{carInfoMap.carNumber}
							</bottomContainerStyle.CarNumber>
							<bottomContainerStyle.MoreInfo>
								<bottomContainerStyle.Digits>
									{carInfoMap.digits}
								</bottomContainerStyle.Digits>
								<bottomContainerStyle.Date>
									<bottomContainerStyle.TimeIcon>
										<BiTime />
									</bottomContainerStyle.TimeIcon>
									{carInfoMap.date}
								</bottomContainerStyle.Date>
							</bottomContainerStyle.MoreInfo>
						</bottomContainerStyle.Top>
						<bottomContainerStyle.Middle>
							<bottomContainerStyle.CarInfo>
								<bottomContainerStyle.Car src={icons.car} />
								<bottomContainerStyle.CarName>
									{carInfoMap.carName}
								</bottomContainerStyle.CarName>
							</bottomContainerStyle.CarInfo>
							<bottomContainerStyle.MoreCarInfo>
								<bottomContainerStyle.MoreCarInfoResize>
									{carInfoMap.moreCarInfo.map((moreInfoMap, index: number) => {
										{
											verticalLineCount = verticalLineCount + 1;
										}
										return (
											<Fragment key={index}>
												<bottomContainerStyle.MoreCarInfoContainer>
													<bottomContainerStyle.Property>
														{moreInfoMap.property}
													</bottomContainerStyle.Property>
													<bottomContainerStyle.Amount>
														{moreInfoMap.amount}
													</bottomContainerStyle.Amount>
													<bottomContainerStyle.Unit>
														{moreInfoMap.unit}
													</bottomContainerStyle.Unit>
												</bottomContainerStyle.MoreCarInfoContainer>

												<bottomContainerStyle.VerticalLine
													style={{
														display: verticalLineCount === 3 ? 'none' : 'block'
													}}
												></bottomContainerStyle.VerticalLine>
											</Fragment>
										);
									})}
								</bottomContainerStyle.MoreCarInfoResize>
							</bottomContainerStyle.MoreCarInfo>
						</bottomContainerStyle.Middle>
						<bottomContainerStyle.Bottom onClick={() => seeMoreClick()}>
							<bottomContainerStyle.SeeMore
								display={toggleSeeMore ? 'block' : 'none'}
							>
								Show More
							</bottomContainerStyle.SeeMore>
							<bottomContainerStyle.ProgressBar
								display={toggleSeeMore ? 'none' : 'block'}
							>
								<CircularProgressBar fuelLevel={fuelLevel} />
							</bottomContainerStyle.ProgressBar>
						</bottomContainerStyle.Bottom>
					</bottomContainerStyle.Main>
				);
			})}
		</>
	);
};

export default BottomContainer;
