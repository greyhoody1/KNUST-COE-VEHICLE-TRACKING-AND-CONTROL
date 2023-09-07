import * as comProfileStyle from './profile.styled';
import { AiFillCamera } from 'react-icons/ai';
import { icons } from '../../assets';

const ProfileComponent = (params: any) => {
	const iconButtonClick = (buttonMap: buttons) => {
		buttonMap.name === 'History' &&
			params.setToggleHistory(!params.toggleHistory);

		buttonMap.name === 'Alert' && params.setToggleAlert(!params.toggleAlert);

		buttonMap.name === 'Panic Control' &&
			params.setTogglePanic(!params.togglePanic);

		// buttonMap.name === 'Tracking' &&
		// params.setToggleTracking(!params.toggleTracking)

		buttonMap.name === 'Ignition' && params.setIgnition(!params.toggleIgnition);

		params.setToggleMenu(!params.toggleMenu);
		params.setToggleBottomDiv(false);
	};

	interface buttons {
		icon: string;
		name: string;
	}

	let vehicleStatus = [
		{
			status: true
		},
		{
			status: false
		},
		{
			status: false
		}
	];

	let buttons: buttons[] = [
		{
			icon: icons.history,
			name: 'History'
		},
		{
			icon: icons.bell,
			name: 'Alert'
		},
		{
			icon: icons.radiantBell,
			name: 'Panic Control'
		},
		// {
		// 	icon: icons.location,
		// 	name: 'Tracking'
		// },
		{
			icon: icons.keyCar,
			name: 'Ignition'
		},
		{
			icon: icons.exit,
			name: 'Log Out'
		}
	];

	return (
		<>
			<comProfileStyle.Main>
				<comProfileStyle.MainContainer>
					<comProfileStyle.CloseButton></comProfileStyle.CloseButton>
					<comProfileStyle.MainProfile>
						<comProfileStyle.DragButton></comProfileStyle.DragButton>
						<comProfileStyle.Content>
							<comProfileStyle.ContentTop>
								<comProfileStyle.Profile>
									<comProfileStyle.ProfileInfo>
										<comProfileStyle.ProfileImgContainer>
											<comProfileStyle.ProfileImg src={icons.femaleBitmoji} />
										</comProfileStyle.ProfileImgContainer>
										<comProfileStyle.ImageButton>
											<AiFillCamera color={'white'} />
										</comProfileStyle.ImageButton>
									</comProfileStyle.ProfileInfo>
									<comProfileStyle.ProfileName>
										Perry Owura Othniel
									</comProfileStyle.ProfileName>
								</comProfileStyle.Profile>
								<comProfileStyle.info>
									<comProfileStyle.InfoContainer>
										<comProfileStyle.InfoTitle>
											Fleet Active:
										</comProfileStyle.InfoTitle>
										<comProfileStyle.Vehicles>
											{vehicleStatus.map((vehicleStatusMap, index: number) => {
												return (
													<comProfileStyle.VehiclesContainer key={index}>
														Vehicle {index + 1}
														<comProfileStyle.VehicleStatus
															statusColor={
																vehicleStatusMap.status ? 'green' : 'red'
															}
														>
															{vehicleStatusMap.status
																? ': online'
																: ': offline'}
														</comProfileStyle.VehicleStatus>
													</comProfileStyle.VehiclesContainer>
												);
											})}
										</comProfileStyle.Vehicles>
									</comProfileStyle.InfoContainer>
								</comProfileStyle.info>
							</comProfileStyle.ContentTop>
							<comProfileStyle.ContentBottom>
								<comProfileStyle.Buttons>
									{buttons.map((buttonMap, index: number) => {
										return (
											<comProfileStyle.IconButton
												key={index}
												onClick={() => {
													iconButtonClick(buttonMap);
												}}
											>
												<comProfileStyle.icon src={buttonMap.icon} />
												<comProfileStyle.IconButtonName>
													{buttonMap.name}
												</comProfileStyle.IconButtonName>
											</comProfileStyle.IconButton>
										);
									})}
								</comProfileStyle.Buttons>
							</comProfileStyle.ContentBottom>
						</comProfileStyle.Content>
					</comProfileStyle.MainProfile>
				</comProfileStyle.MainContainer>
			</comProfileStyle.Main>
		</>
	);
};

export default ProfileComponent;
