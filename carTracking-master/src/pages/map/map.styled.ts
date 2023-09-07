import styled from "styled-components";
// import motion from 'framer-motion'

export const Main = styled.div.attrs({
    className : ` Main w-full h-screen flex justify-center relative overflow-hidden`
})`
    background : ${({theme}) => theme.colors.background.light.white};
`

export const Home = styled.div.attrs({
    className : `absolute w-full h-screen z-20 duration-500`
})<{opacityNumber? : number, scaleNumber? : number, display? : string}>
`
    opacity : ${({opacityNumber}) => opacityNumber};
    display : ${({display}) => display};
    transform : ${({scaleNumber}) => `scale(${scaleNumber})`};
`

export const BottomDiv = styled.div.attrs({
    className : `BottomDiv text-sm p-[20px] w-[85%] absolute bottom-[4%] rounded-2xl duration-300`
})<{translateNumber? : string}>
`
    background : ${({theme}) => theme.colors.background.dark.primary};
    color : ${({theme}) => theme.colors.text.light.primary};
    transform : ${({translateNumber}) => `translatey(${translateNumber})`};
    transition-timing-function : ${() => 'cubic-bezier(0.1,0.1,0.05,1.2)'};
`

export const Menu = styled.div.attrs({
    className : `Menu w-[40px] h-[40px] bg-white shadow-[-2px_2px_10px_0px_rgba(0,0,0,0.3)] rounded-full
                 flex justify-center items-center text-bold fixed z-10`
})``

export const MenuContainer = styled.div.attrs({
    className : `MenuContainer absolute w-[85%] mt-[30px] `
})``

export const IconContainer = styled.div.attrs({
    className : ``
})<{display? : string}>
`
    display : ${({display}) => display};
`

export const CancelIcon = styled.div.attrs({
    className : ``
})<{display? : string}>
`
    display : ${({display}) => display};
`

export const Profile = styled.div.attrs({
    className : `Profile w-full h-4/5 gap-3 absolute bottom-[0] flex flex-col items-center duration-300`
})<{translateNumber? : string}>
`
    transform : ${({translateNumber}) => `translatey(${translateNumber})`};
    transition-timing-function : ${() => 'cubic-bezier(0.1,0.1,0.05,1.2)'};
`
export const ProfileContainer = styled.div.attrs({
    className : `ProfileContainer absolute w-full h-screen duration-300`
})<{display? : string, opacity? : number}>
`
    background : ${({theme}) => theme.colors.background.dark.black + "4D"};
    opacity : ${({opacity}) => opacity};
    display : ${({display}) => display};
`

export const DragButton = styled.div.attrs({
    className : `w-full flex justify-center `
})``

export const DragButtonContainer = styled.div.attrs({
    className : `w-[80px] h-[10px] rounded-full duration-1000`
})<{widthNumber? : string}>
`
    background : ${({theme}) => theme.colors.background.light.white};
    width : ${({widthNumber}) => widthNumber};
    
`
export const HistoryContainer = styled.div.attrs({
    className : `absolute w-full h-screen z-20 flex justify-center duration-300`
})<{translateNumber? : string}>
`
    background : ${({theme}) => theme.colors.background.light.white};
    transform : ${({translateNumber}) => `translatex(${translateNumber})`};
    transition-timing-function : ${() => 'cubic-bezier(0.1,0.1,0.05,1.2)'};
`
