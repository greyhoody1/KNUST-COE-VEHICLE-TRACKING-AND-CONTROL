import * as historyStyle from './hostory.styled'
import HistoryComponent from '../../components/history/history'

const History = () => {
    return(
        <>
            <historyStyle.Main>
                <historyStyle.MainContainer>
                <historyStyle.BackButton>

                </historyStyle.BackButton>
                <HistoryComponent/>
                </historyStyle.MainContainer>
            </historyStyle.Main>
        </>
    )
}

export default History