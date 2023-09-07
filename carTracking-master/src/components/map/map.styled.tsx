import styled from "styled-components";

export const Main = styled.div.attrs({
    className : ` w-[10000px] h-[10000px] bg-black text-sm`
})`
    color : ${({theme}) => theme.colors.text.dark.primary};
    background : ${({theme}) => theme.colors.background.light.white};
`