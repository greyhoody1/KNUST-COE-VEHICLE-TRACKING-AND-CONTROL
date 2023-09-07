import * as mapStyle from './map.styled'
import theme from '../../styles/theme'
import BottomContainer from '../../components/bottom container/bottomContainer'
import ProfileComponent from '../../components/profile/profile'
import { FiMenu } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import Home from '../home/home'
import HistoryComponent from '../../components/history/history'
import Panic from '../../components/panic control/panicControl'
import Alert from '../../components/alert/alert'
import Tracking from '../../components/tracking/tracking'
import Ignition from '../../components/ignition/ignition'
import ComMap from '../../components/map/leafletMap'
// import { motion } from "framer-motion"

//correct the type here
const Map = () => {

    //profile buttons state
    const [toggleHistory, setToggleHistory] = useState(false)
    const [toggleAlert, setToggleAlert] = useState(false)
    const [togglePanic, setTogglePanic] = useState(false)
    const [toggleTracking, setToggleTracking] = useState(false)
    const [toggleIgnition, setIgnition] = useState(false)

    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleBottomDiv, setToggleBottomDiv] = useState(false)
    const [homeOpcaity, setHomeOpacity] = useState(1)
    const [homeScale, setHomeScale] = useState(1)
    const [homeDisplay, setHomeDisplay] = useState("block")
    const [ toggleProfileContainer, setToggleProfileContainer] = useState(false)
       const toggleMenuChange = () => {
        setToggleMenu(!toggleMenu)
    }

    const homeLoader = () =>{
        setTimeout(() => {
            setHomeOpacity(0)
            setHomeScale(30)
            setTimeout(() => {
                setHomeDisplay("none")
            }, 1000);
        }, 3000);
    }

    useEffect(() => {
        homeLoader()
    }, [])

    useEffect(() => {
        setToggleBottomDiv(toggleMenu? false : true)
        setToggleProfileContainer(toggleProfileContainer? false : true)
    }, [toggleMenu])

    const profileContainerClick = () => {
        toggleMenu? toggleMenuChange() : setToggleMenu(toggleMenu)
    }
    

    return (
        <>
            <mapStyle.Main>
                <mapStyle.Home
                    opacityNumber = {homeOpcaity}
                    scaleNumber = {homeScale}
                    display = {homeDisplay}
                >
                    <Home/>
                </mapStyle.Home>
                <ComMap />
                <mapStyle.MenuContainer>
                    <mapStyle.Menu onClick={() => toggleMenuChange()}>
                        <mapStyle.IconContainer display = {toggleMenu? 'none' : 'block'}>
                            <FiMenu size = {"20px"} color = {theme.colors.background.dark.secondary} />
                        </mapStyle.IconContainer>
                        <mapStyle.CancelIcon display = {toggleMenu? 'block' : 'none'}>
                            <ImCross size = {"15px"} color = {theme.colors.background.dark.secondary}/>
                        </mapStyle.CancelIcon>
                    </mapStyle.Menu>
                </mapStyle.MenuContainer>
                <mapStyle.BottomDiv translateNumber = 
                    {toggleMenu && toggleBottomDiv === false? '100%' : '0%'}>
                    <BottomContainer />
                </mapStyle.BottomDiv>
                <mapStyle.ProfileContainer
                    opacity = {toggleMenu? 1 : 0}
                    display = {toggleProfileContainer? 'none' : 'block'}
                    onClick={()=>profileContainerClick()}
                >
                </mapStyle.ProfileContainer>
                    <mapStyle.Profile 
                        translateNumber = 
                        {toggleMenu? '10%' : '100%'}
                        >
                        <mapStyle.DragButton>
                            <mapStyle.DragButtonContainer widthNumber = {toggleMenu? '80px' : '0'}>
                            </mapStyle.DragButtonContainer>
                        </mapStyle.DragButton>
                        <ProfileComponent
                            toggleHistory = {toggleHistory}
                            setToggleHistory = {setToggleHistory}
                            
                            toggleAlert = {toggleAlert}
                            setToggleAlert = {setToggleAlert}

                            togglePanic = {togglePanic}
                            setTogglePanic = {setTogglePanic}
                            
                            toggleTracking = {toggleTracking}
                            setToggleTracking = {setToggleTracking}

                            toggleIgnition = {toggleIgnition}
                            setIgnition = {setIgnition}

                            toggleMenu = {toggleMenu}
                            setToggleMenu = {setToggleMenu}
                            setToggleBottomDiv = {setToggleBottomDiv}
                        />
                    </mapStyle.Profile>
                    <mapStyle.HistoryContainer
                        translateNumber = 
                        {toggleHistory? '0%' : '-100%'}
                    >
                        <HistoryComponent
                            setToggleHistory = {setToggleHistory}
                            toggleHistory = {toggleHistory}
                            toggleMenu = {toggleMenu}
                            setToggleMenu = {setToggleMenu}
                            setToggleBottomDiv = {setToggleBottomDiv}
                        />
                    </mapStyle.HistoryContainer>

                        <mapStyle.HistoryContainer
                            translateNumber = 
                            {toggleAlert? '0%' : '-100%'}
                        >
                            <Alert
                                setToggleAlert = {setToggleAlert}
                                toggleAlert = {toggleAlert}
                                toggleMenu = {toggleMenu}
                                setToggleMenu = {setToggleMenu}
                                setToggleBottomDiv = {setToggleBottomDiv}
                            />
                        </mapStyle.HistoryContainer>

                        <mapStyle.HistoryContainer
                            translateNumber = 
                            {togglePanic? '0%' : '-100%'}
                        >
                            <Panic
                                setTogglePanic = {setTogglePanic}
                                togglePanic = {togglePanic}
                                toggleMenu = {toggleMenu}
                                setToggleMenu = {setToggleMenu}
                                setToggleBottomDiv = {setToggleBottomDiv}
                            />
                        </mapStyle.HistoryContainer>

                        <mapStyle.HistoryContainer
                            translateNumber = 
                            {toggleTracking? '0%' : '-100%'}
                        >
                            <Tracking
                                setToggleTracking = {setToggleTracking}
                                toggleTracking = {toggleTracking}
                                toggleMenu = {toggleMenu}
                                setToggleMenu = {setToggleMenu}
                                setToggleBottomDiv = {setToggleBottomDiv}
                            />
                        </mapStyle.HistoryContainer>

                        <mapStyle.HistoryContainer
                            translateNumber = 
                            {toggleIgnition? '0%' : '-100%'}
                        >
                            <Ignition
                                setIgnition = {setIgnition}
                                toggleIgnition = {toggleIgnition}
                                toggleMenu = {toggleMenu}
                                setToggleMenu = {setToggleMenu}
                                setToggleBottomDiv = {setToggleBottomDiv}
                            />
                        </mapStyle.HistoryContainer>
            </mapStyle.Main>
        </>
    )
}

export default Map