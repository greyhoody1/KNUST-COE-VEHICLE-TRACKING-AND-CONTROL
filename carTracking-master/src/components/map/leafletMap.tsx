import { useState, useEffect } from 'react';
import * as comMapStyle from './map.styled';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import { svgs } from '../../assets';
import fetchDataFromThingSpeak from '../../utilities/fetchDataFromThingSpeak';

// const center: LatLngTuple = [5.48, -0.802];

const CarIcon = L.icon({
	iconUrl: svgs.carTopView,
	iconSize: [40, 40],
	iconAnchor: [12, 12],
	popupAnchor: [0, 0]
});

const ComMap = () => {
	const [center, setCenter] = useState<LatLngTuple>([5.48, -0.8]);

	useEffect(() => {
		const fetchFeeds = async () => {
			try {
				const feeds = await fetchDataFromThingSpeak();
				const feedLength = feeds.length;
				const { field1: longitude, field2: latitude } = feeds[feedLength - 1];
				setCenter([longitude, latitude]);
			} catch (e) {
				console.log('Error fetching feed');
			}
		};

		// Fetch data and update the marker position immediately
		fetchFeeds();

		// Fetch data every 10 seconds and update the marker position
		const interval = setInterval(fetchFeeds, 2000);

		// Clean up the interval on component unmount
		return () => clearInterval(interval);
	}, []);
	return (
		<>
			<comMapStyle.Main>
				<MapContainer center={center} zoom={13} scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={center} icon={CarIcon}>
						<Popup>car tracking app</Popup>
					</Marker>
				</MapContainer>
			</comMapStyle.Main>
		</>
	);
};

export default ComMap;
