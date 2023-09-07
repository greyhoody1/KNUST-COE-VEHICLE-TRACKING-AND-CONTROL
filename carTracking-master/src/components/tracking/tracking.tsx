import * as trackingStyle from './tracking.styled'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Tracking = (params : any) => {
    return(
        <>
            <trackingStyle.Main>
                <trackingStyle.BackIcon 
                    onClick={()=> {
                        params.setToggleTracking(!params.toggleTracking)
                        params.setToggleMenu(true)
                    }}
                >
                    < AiOutlineArrowLeft 
                        size = "25px"
                    />
                </trackingStyle.BackIcon>
                <trackingStyle.Title>
                    Tracking
                </trackingStyle.Title>
            </trackingStyle.Main>
        </>
    )
}

export default Tracking