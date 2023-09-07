import * as alertStyle from './alert.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import Chart from '../chart/chart';

const Alert = (params: any) => {
	return (
		<>
			<alertStyle.Main>
				<alertStyle.BackIcon
					onClick={() => {
						params.setToggleAlert(!params.toggleAlert);
						params.setToggleMenu(true);
					}}
				>
					<AiOutlineArrowLeft size='25px' />
				</alertStyle.BackIcon>
				<alertStyle.Title>Alert</alertStyle.Title>
				<Chart />
			</alertStyle.Main>
		</>
	);
};

export default Alert;
