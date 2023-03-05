import { IntroSection } from "../IntroSection"
import { Timeline } from "../Timeline"
import styled from "styled-components"
import ProjectSection from "../ProjectSection"
import timeline from "../Data/timelineData"
import BlogSection from "../BlogSection"
import Footer from "../Footer"

export default function HomeComponent(){
    return (
        <Wrapper>
            <IntroSection />
            <Timeline timeline={timeline}/>
            <ProjectSection />
            <BlogSection />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.main`
    width: 100%;
    max-width: 900px;

`