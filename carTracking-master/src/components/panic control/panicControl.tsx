import * as panicStyle from './panicControl.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Panic = (params: any) => {
	return (
		<>
			<panicStyle.Main>
				<panicStyle.BackIcon
					onClick={() => {
						params.setTogglePanic(!params.togglePanic);
						params.setToggleMenu(true);
					}}
				>
					<AiOutlineArrowLeft size='25px' />
				</panicStyle.BackIcon>
				<panicStyle.Title>Panic</panicStyle.Title>

				<button className=' bg-gray-500 inline-block w-32 h-32 shadow text-white text-center rounded-full'>
					Press to turn off
				</button>
			</panicStyle.Main>
		</>
	);
};

export default Panic;
