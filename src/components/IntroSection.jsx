import styled, { keyframes } from "styled-components"

export function IntroSection() {

    return (
        <Wrapper>
            <Content>
                Hi 👋,
                <br />
                My name is
                <Name>
                    <TypeWriter>Mohit Sharma</TypeWriter>
                </Name>
                <Desc>I turn Ideas into Reality.</Desc>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`
const Content = styled.div`
    padding: 110px 0; 
    padding-bottom: 50px;
    font-weight: 900;
    font-size: 2rem;
`

const Name = styled.div`
width: fit-content;
background: -webkit-linear-gradient(109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 3rem;
display: flex;
justify-content: start;
margin: 12px 0;
    
`
const Desc = styled.div`
    font-size: 1.4rem;
    font-weight: 300;
    margin: 12px 0;
`

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`
const blinkCaret = keyframes`
    from, to { border-color: transparent }
  50% { border-color: deeppink; }
`

const TypeWriter = styled.div`
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid deeppink; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
        ${typing} 1.5s steps(20, end),
        ${blinkCaret} .5s step-end infinite;
`