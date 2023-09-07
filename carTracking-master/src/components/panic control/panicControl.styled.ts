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