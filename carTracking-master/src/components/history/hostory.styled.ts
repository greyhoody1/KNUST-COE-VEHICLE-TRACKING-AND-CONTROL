import styled from "styled-components";

export const Main = styled.div.attrs({
    className : `w-4/5 pt-[30px] text-sm`
})`
    color : ${({theme}) => theme.colors.text.dark.primary };
`

export const Title = styled.div.attrs({
    className : `font-bold text-xl mb-[20px]`
})`
`

export const BackIcon = styled.div.attrs({
    className : `mb-[15px] `
})``

export const info = styled.div.attrs({
    className : ``
})``

export const Month = styled.div.attrs({
    className : `mb-[10px] mt-[10px]`
})`
`

export const Details = styled.div.attrs({
    className : ``
})``

export const DetailsContainer = styled.div.attrs({
    className : `flex gap-3 h-[65px] items-center`
})``

export const Icon = styled.div.attrs({
    className : `w-[45px] h-[45px] flex rounded-full items-center justify-center`
})`
    background : ${({theme}) => theme.colors.background.light.secondary };
`

export const LocationDetails = styled.div.attrs({
    className : `h-full w-4/5 flex flex-col justify-center border-b-2 pb-[20px] pt-[20px]`
})`
    border : ${({theme}) => theme.colors.border.dark.black + "1px solid"};
`

export const Location = styled.div.attrs({
    className : `font-semibold`
})`
`

export const Date = styled.div.attrs({
    className : `text-sm mt-[-4px]`
})``