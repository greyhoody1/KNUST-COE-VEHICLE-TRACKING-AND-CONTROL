import * as comHistoryStyle from './hostory.styled'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiFillCar } from 'react-icons/ai'

const HistoryComponent = (params : any) => {

    const details = [
        {
            location : 'Ahodwo-Tech Junc',
            date : '18 May, 10:26',
        },
        {
            location : 'Ahodwo-Tech Junc',
            date : '18 May, 10:26',
        },
        {
            location : 'Ahodwo-Tech Junc',
            date : '18 May, 10:26',
        },
        {
            location : 'Ahodwo-Tech Junc',
            date : '18 May, 10:26',
        },
    ]

    return(
        <>
            <comHistoryStyle.Main>
                <comHistoryStyle.BackIcon 
                    onClick={()=> {
                        params.setToggleHistory(!params.toggleHistory)
                        params.setToggleMenu(true)
                    }}
                >
                    < AiOutlineArrowLeft 
                        size = "25px"
                    />
                </comHistoryStyle.BackIcon>
                <comHistoryStyle.Title>
                    History
                </comHistoryStyle.Title>
                <comHistoryStyle.info>
                    <comHistoryStyle.Month>
                        May, 2023
                    </comHistoryStyle.Month>
                    <comHistoryStyle.Details>
                        {
                            details.map((detailsMap, index : number) =>{
                                return(
                                    <comHistoryStyle.DetailsContainer key={index}>
                                        <comHistoryStyle.Icon>
                                            < AiFillCar 
                                                size = "22px"
                                            />
                                        </comHistoryStyle.Icon>
                                        <comHistoryStyle.LocationDetails>
                                            <comHistoryStyle.Location>
                                                Ahodwo-Tech Junc
                                            </comHistoryStyle.Location>
                                            <comHistoryStyle.Date>
                                                18 May, 10:26
                                            </comHistoryStyle.Date>
                                        </comHistoryStyle.LocationDetails>
                                    </comHistoryStyle.DetailsContainer>
                                )
                            })
                        }
                    </comHistoryStyle.Details>
                </comHistoryStyle.info>
            </comHistoryStyle.Main>
        </>
    )
}

export default HistoryComponent