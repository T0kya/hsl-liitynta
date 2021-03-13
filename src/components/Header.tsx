import styled from '@emotion/styled'

const Container = styled.header `
    padding: ${props => props.theme.spacing.large}px;
    background-color: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.white};
    margin-bottom: ${props => props.theme.spacing.large}px;
`

interface Props {
    children: React.ReactNode
}

export function Header({children} : Props){
  return <Container>
    {children}
  </Container>
}