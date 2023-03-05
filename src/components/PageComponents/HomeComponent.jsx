import { IntroSection } from "../IntroSection"
import NavBar from "../NavBar"
import { Timeline } from "../Timeline"
import styled from "styled-components"
import ProjectSection from "../ProjectSection"
import timeline from "../Data/timelineData"

export default function HomeComponent(){
    return (
        <Wrapper>
            <NavBar />
            <IntroSection />
            <Timeline timeline={timeline}/>
            <ProjectSection />
        </Wrapper>
    )
}

const Wrapper = styled.main`
    width: 100%;
    max-width: 900px;

`