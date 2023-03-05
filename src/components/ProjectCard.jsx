import styled from "styled-components"
import { ExternalLinkIcon, GithubIcon } from "./Icons/Icons"
import TagWithIcon from "./TagWithIcon"

export default function ProjectCard(project) {
    const icons = [
        "html5", "sass", "js", "figma", "nextjs"
    ]
    return (
        <Wrapper>
            <ImageWrapper>
                <img src={`/images/projects/${project.cover}.png`} alt="Project Image" />
            </ImageWrapper>
            <Content>
                <Title
                    href={project.liveLink}
                    target="_blank"
                    color={project.color}
                    onClick={(e)=>{
                        if(project.liveLink === "")
                            e.preventDefault()
                    }}
                >
                    {project.title}
                    {(project.liveLink !== "") ?
                        <ExternalLinkIcon color={"#d2d2d2"} /> : null}
                </Title>
                <Desc>{project.desc}</Desc>
                <TagWithIcon
                    text={"Open Source"}
                    Icon={GithubIcon}
                    backgroundColor={project.color}
                    link={project.source} />
                <Stack>
                    {
                        project.techStack.map((icon) => (
                            <Icon key={icon}>
                                <img src={`/images/TechStack/${icon}.svg`} alt="" />
                            </Icon>
                        ))
                    }
                </Stack>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 12px 0;
    max-width: 400px;
    width:100%;
    max-height: 500px;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    display: flex;
    flex-direction: column;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 50%;
    overflow: hidden;
    border-radius: 12px 12px 0 0;
    flex-grow: 1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .2s linear;

        &:hover{
            scale: 1.2;
        }
    }
`

const Content = styled.div`
    padding: 12px 18px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 2;
`

const Title = styled.a`
    font-size: 1.4rem;
    font-weight: 600;
    transition: all .1s ease-in-out;
    display: flex;
    align-items: center;
    gap:4px;
    flex-grow:1;

    &:hover{
        color: ${props => props.color || "lightseagreen"};
        svg{
            stroke:  ${props => props.color || "lightseagreen"};
        }
    }
`
const Desc = styled.div`
    font-weight: 300;
    margin: 10px 0;
    flex-grow:2;
`

const SmallHeading = styled.div`
    margin: 6px 0;
    font-size: .9rem;
    color: gray;
    font-weight: 300;
    position: relative;
    width: 100%;

    span{
        background-color: white;
        padding: 2px;
        padding-right: 8px;
    }

    &::before{
        content:"";
        display: inline-block;
        width:100%;
        height: 2px;
        background-color: silver;
        position: absolute;
        top:50%;
        bottom: 50%;
        z-index: -1;
        border-radius: 8px;
    }
`

const Icon = styled.div`
    width:80px;
    height: 80px;
    margin-left: -48px;
    transition: all .3s linear;
    &:hover{
        margin-left: -25px;
    }

    img{
        width:100%;
        height: 100%;
    }
`

const Stack = styled.div`
    display: flex;
    margin: 8px 0;
    flex-grow: 1;
`
