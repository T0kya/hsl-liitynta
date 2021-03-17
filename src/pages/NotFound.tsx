import styled from '@emotion/styled'

const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
    background-color: ${props => props.theme.color.grey};
`

export function NotFound() {
  return (
    <Container>
      <h2>
                Oops! Jotain meni pieleen ja pysäkkien lataus epäonnistui.
      </h2>
      <p>
                Lataa sivu uudelleen virheen poistamiseksi
      </p>
    </Container>
  )
}