import styled, { keyframes } from "styled-components";
import projects from "../Data/projectData";
import TagWithIcon from "../TagWithIcon";
import { ExternalLinkIcon, GithubIcon } from "../Icons/Icons";
import QUERIES from "../Utils/Queries";
import SectionHeading from "./SectionHeading";

export default function Projects() {
    return (
        <Wrapper data-section id="project">
            <SectionHeading title={"Project"}/>
            <List>
                {
                    projects.map(project => (
                        <Project key={project.title}>
                            <Image>
                                <img src={`/images/projects/${project.cover}.png`} alt={project.title} />
                            </Image>
                            <Content href={project.liveLink === "" ? project.source : project.liveLink} target="_blank">
                                <Title >
                                    {project.title}
                                    <ExternalLinkIcon id="extIcon" color={"white"} stroke={1.4} size={20} />
                                </Title>
                                <Description>
                                    {project.desc}
                                </Description>
                            </Content>
                            <TagWithIcon
                                text={"Open Source"}
                                Icon={GithubIcon}
                                backgroundColor={project.color}
                                link={project.source}
                            />
                        </Project>
                    ))
                }
            </List>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    
`;

const List = styled.ol`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media ${QUERIES.tabletOrSmaller} {
       justify-content: center;
    }
`;

const Image = styled.div`
    min-width: 100px;
    aspect-ratio: 16/9;
    overflow: hidden;
    border-radius: 12px;
    border: 2px solid hsl(0 0% 50%);

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .2s linear;
    }
`;

const Content = styled.a`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Description = styled.p`
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.5;
    margin-top: 0.2rem;
`;

const daigonal = keyframes`
    from {
        transform: translate(0);
    }
    to {
        transform: translate(4px, -4px);
    }
`

const Project = styled.li`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 12px;
    width: 45%;
    cursor: pointer;
    gap: 1rem;

    @media ${QUERIES.desktopOrLarger} {
        &:hover{
            background-color: ${props => props.theme.onBackground};
        }
        &:hover ${Title} {
            color: ${props => props.theme.accent};
        }
        &:hover #extIcon {
            stroke: ${props => props.theme.accent};
            animation: ${daigonal} .4s infinite ease alternate;
        }
    }

    @media ${QUERIES.tabletOrSmaller} {
        width: 30%;
        min-width: 250px;
    }

    @media ${QUERIES.mobileOrSmaller} {
        width: 100%;
    }
`;