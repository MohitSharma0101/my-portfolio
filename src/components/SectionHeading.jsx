import styled from "styled-components"

export default function SectionHeading({title}) {
    return (
        <Heading>
            <Line />
            <Title>{title}</Title>
        </Heading>
    )
}

const Heading = styled.div`
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: baseline;
    position: relative;
    margin: 32px 0;
`

const Line = styled.div`
    position: absolute;
    width: 100%;
    max-width: 600px;
    top:50%;
    bottom: 50%;
    height: 2px;
    background-color: #d2d2d2;
    border-radius: 50%;
`

const Title = styled.div`
    position: absolute;
    padding: 12px;
    height: 100%;
    background-color: white;
    color: #808080;
    font-weight: 600;
`