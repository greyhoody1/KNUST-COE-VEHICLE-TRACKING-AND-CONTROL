import styled from 'styled-components'

export const Main = styled.div.attrs({
    className : `Main w-full h-screen flex justify-center items-center`
})<{background?: string}>
`
    background : ${({theme}) => theme.colors.background.dark.primary};

`

export const Logo = styled.div.attrs({
    className : `flex w-16 flex flex-col justify-center items-center`
})``

export const LogoTitle = styled.div.attrs({
    className : `LogoTitle mt-[-13px] text-lg`
})`
    color : ${({theme}) => theme.colors.text.light.primary};
`

export const LogoImg = styled.img.attrs({
    className : ``
})``