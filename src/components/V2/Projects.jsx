import styled from "styled-components";
import projects from "../Data/projectData";
import TagWithIcon from "../TagWithIcon";
import { GithubIcon } from "../Icons/Icons";

export default function Projects() {
    return (
        <Wrapper data-section id="project">
            <List>
                {
                    projects.map(project => (
                        <Project>
                            <Image>
                                <img src={`/images/projects/${project.cover}.png`} alt={project.title} />
                            </Image>
                            <Content>
                                <Title>
                                    {project.title}
                                    <Description>
                                        {project.desc}
                                    </Description>
                                </Title>
                                <TagWithIcon
                                    text={"Open Source"}
                                    Icon={GithubIcon}
                                    backgroundColor={project.color}
                                    link={project.source} 
                                />
                            </Content>
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
`;

const Project = styled.li`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 12px;
    width: 45%;
    cursor: pointer;
    gap: 1rem;
    &:hover{
        background-color: ${props => props.theme.onBackground};
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

const Content = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`;

const Title = styled.h1`
    font-size: 1rem;
    font-weight: 700;
`;

const Description = styled.p`
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.5;
    margin-top: 0.2rem;
`;