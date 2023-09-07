import styled from "styled-components";

export const Main = styled.div.attrs({
    className : `Main w-full h-full flex justify-center rounded-t-[50px]`
})`
    background : ${({theme}) => theme.colors.background.light.white};
    color : ${({theme}) => theme.colors.text.dark.primary};
`

export const MainContainer = styled.div.attrs({
    className : `MainContainer w-full mt-[30px]`
})``

export const CloseButton = styled.div.attrs({
    className : ``
})``

export const MainProfile = styled.div.attrs({
    className : ``
})``

export const DragButton = styled.div.attrs({
    className : ``
})``

export const Content = styled.div.attrs({
    className : ``
})``

export const ContentTop = styled.div.attrs({
    className : `border-b-[10px]`
})`
    
`

export const Profile = styled.div.attrs({
    className : `Profile w-full flex flex-col items-center mb-[10px]`
})``

export const ProfileInfo = styled.div.attrs({
    className : `ProfileInfo relative`
})``

export const ProfileImgContainer = styled.div.attrs({
    className : `ProfileImg w-[100px] h-[100px] flex justify-center items-center rounded-full bg-gray-500`
})``

export const ProfileImg = styled.img.attrs({
    className : `w-[80px]`
})``

export const ImageButton = styled.div.attrs({
    className : `ImageButton w-[30px] h-[30px] flex justify-center items-center absolute bottom-[0] right-[0] rounded-full`
})`
     background : ${({theme}) => theme.colors.background.dark.secondary};
`

export const ProfileName = styled.div.attrs({
    className : `font-bold`
})`
    
`

export const info = styled.div.attrs({
    className : `info text-sm flex justify-center`
})`
    border-color : ${({theme}) => theme.colors.border.light.primary};
`
export const InfoContainer = styled.div.attrs({
    className : `w-4/5 flex flex-col mb-[30px]`
})``

export const InfoTitle = styled.div.attrs({
    className : `InfoTitle font-bold text-md`
})`
    color : ${({theme}) => theme.colors.text.dark.primary};
`

export const Vehicles = styled.div.attrs({
    className : `flex gap-1 justify-between text-xs font-semibold`
})``

export const VehiclesContainer = styled.div.attrs({
    className : `flex`
})``

export const VehicleStatus = styled.div.attrs({
    className : ``
})<{statusColor? : string}>
`
    color : ${({statusColor}) => statusColor};
`

export const ContentBottom = styled.div.attrs({
    className : `mt-[30px] flex flex-col items-center`
})``

export const Buttons = styled.div.attrs({
    className : `w-4/5 flex flex-wrap gap-5 justify-between`
})``

export const IconButton = styled.div.attrs({
    className : `w-[70px] h-[70px] xs:w-[90px] xs:h-[90px] rounded-lg flex flex-col items-center justify-center text-[8px] font-bold`
})`
    background : ${({theme}) => theme.colors.background.light.primary};
`

export const icon = styled.img.attrs({
    className : `mb-[3px] opacity-95 w-[27px]`
})``

export const IconButtonName = styled.div.attrs({
    className : ``
})``
