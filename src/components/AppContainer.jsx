import styled from "styled-components"

export default function AppContainer({children}){
    return(
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    padding: 32px;
    display: flex;
    justify-content: center;
    width:100%;
    height: 100vh;
`