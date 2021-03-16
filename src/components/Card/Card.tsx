import styled from '@emotion/styled'

const Container = styled.div `
    background-color: ${props => props.theme.color.white};
    border: 1px solid ${props => props.theme.color.border};
    border-radius: 4px;
    box-shadow: 0px 8px 13px -3px rgba(0,0,0,0.20);
`

const Title = styled.div `
    border-bottom: 1px solid ${props => props.theme.color.border};
    padding: ${props => props.theme.spacing.medium}px;
`

const Content = styled.div `
    padding: ${props => props.theme.spacing.medium}px;
`

interface Props {
    children: React.ReactNode
    title: string
}

export function Card({children, title}:Props){
  return <Container>
    <Title><h3>{title}</h3></Title>
    <Content>
      {children}
    </Content>
  </Container>
}