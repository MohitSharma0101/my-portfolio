import styled from "styled-components"
import projects from "./Data/projectData"
import ProjectCard from "./ProjectCard"
import SectionHeading from "./SectionHeading"

export default function ProjectSection(){
    return(
        <Wrapper id="projects">
            <SectionHeading title={"Projects"}/>
            <ProjectList>
                {
                    projects.map((project)=>(
                        <ProjectCard {...project}/>
                    ))
                }
            </ProjectList>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: 42px;
`

const ProjectList = styled.div`
    display: flex;
    gap: 70px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`