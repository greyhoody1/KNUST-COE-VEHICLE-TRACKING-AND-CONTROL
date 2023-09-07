const fetchDataFromThingSpeak = async () => {
	try {
		const response = await fetch(
			'https://api.thingspeak.com/channels/2224740/feeds.json'
		);
		const data = await response.json();
		const { feeds } = data;

		return feeds;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};
export default fetchDataFromThingSpeak;
