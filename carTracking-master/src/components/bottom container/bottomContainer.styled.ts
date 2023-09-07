import styled from "styled-components";

export const Main = styled.div.attrs({
    className : ``
})`
    /* transform : ${() => `translatey(50px)`}; */
`

export const Top = styled.div.attrs({
    className : `flex flex-col`
})``

export const Middle = styled.div.attrs({
    className : ``
})``

export const Bottom = styled.div.attrs({
    className : `flex justify-center cursor-pointer mt-[20px] font-bold`
})``

export const CarNumber = styled.div.attrs({
    className : `font-bold`
})`
    color : ${({theme}) => theme.colors.text.light.white};
`

export const MoreInfo = styled.div.attrs({
    className : `flex justify-between pb-[7px] mb-[5px]`
})`
    border-bottom : ${({theme}) => `1px solid ${theme.colors.border.light.secondary}`};
`

export const Digits = styled.div.attrs({
    className : `text-xs`
})`
`

export const Date = styled.div.attrs({
    className : `text-xs flex h-4 items-center`
})``

export const TimeIcon = styled.div.attrs({
    className : `mt-[1px] mr-[3px]`
})``

export const CarInfo = styled.div.attrs({
    className : `flex items-center  h-[70px] mt-[-15px] mb-[7px]`
})`
    margin-left : ${()=> `7%`};
`

export const Car = styled.img.attrs({
    className : ``
})``

export const CarName = styled.div.attrs({
    className : `mt-[18px]`
})``

export const Info = styled.div.attrs({
    className : ``
})``

export const MoreCarInfo = styled.div.attrs({
    className : `flex  w-full pb-[7px] justify-center text-[9px]`
})`
     border-bottom : ${({theme}) => `1px solid ${theme.colors.border.light.secondary}`};
`

export const MoreCarInfoResize = styled.div.attrs({
    className : `flex w-4/5 justify-between`
})`
`

export const MoreCarInfoContainer = styled.div.attrs({
    className : `flex flex-col items-center`
})``

export const MoreCarInfoWrapper = styled.div.attrs({
    className : `flex w-full justify-between gap-10`
})``

export const VerticalLine = styled.div.attrs({
    className : `w-[0.5px] h-[50%] mt-[18px]`
})`
     background : ${({theme}) => theme.colors.border.light.primary};
`

export const Property = styled.div.attrs({
    className : ``
})``

export const Amount = styled.div.attrs({
    className : `text-lg font-bold`
})`
    color : ${({theme}) => theme.colors.text.light.white};
`

export const Unit = styled.div.attrs({
    className : ``
})``

export const SeeMore = styled.div.attrs({
    className : `text-xs`
})<{display? :string}>
`
    display : ${({display}) => display};
`
export const ProgressBar = styled.div.attrs({
    className : `w-[75px]`
})<{display? :string}>
`
    display : ${({display}) => display};
`

