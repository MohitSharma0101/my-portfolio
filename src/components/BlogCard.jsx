import styled from "styled-components"
import { ExternalLinkIcon } from "./Icons/Icons"

export default function BlogCard(blog){
    function getRandomHue(index) {
        return Math.random() * (index) * 100;
      }      
    return (
        <Wrapper  href={blog.link} target="_blank">
            <ImageWrapper>
                <img src={`/images/blogs/${blog.cover}`} alt="blog cover"/>
            </ImageWrapper>
            <Content>
                <InfoTag>
                    {blog.readTime}
                <Separator />
                    {blog.date}
                </InfoTag>
                <Title>
                    {blog.title}
                    <ExternalLinkIcon color={"#d2d2d2"}/>
                </Title>
                <Desc>
                {blog.desc}
                </Desc>

                <Tags >
                    {
                        blog.tags.map((tag,index) => {

                            return <Tag key={tag} hue={getRandomHue(index)}>{tag}</Tag>
                        })
                    }
                </Tags>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.a`
    width: 900px;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    border-radius: 10px;
    margin-bottom: 44px;
    display: flex;
    cursor: pointer;
`

const ImageWrapper = styled.div`
    width:40%;
    min-width: 350px;
    height: 100%;

    img{
        width:100%;
        height:100%;
        border-radius: 10px 0 0 10px;
        object-fit: cover;
    }
`

const Content = styled.div`
    padding: 24px;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
`

const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap:6px;
    cursor: pointer;
    transition: all .2s linear;

    &:hover{
        color: ${props => props.color || "deepskyblue"};

        svg{
            stroke: ${props => props.color || "deepskyblue"}
        }
    }
`

const Desc = styled.p`
    font-weight: 300;

    &:after{
        content: "  read more.";
        margin: 0 4px;
        font-weight: 400;
    }
`

const InfoTag = styled.div`
    padding: 8px 0;
    width: fit-content;
    border-radius: 8px;
    margin-bottom: 6px;
    display: flex;
    gap:12px;
    align-items: center;
`
const Separator = styled.div`
    padding: 4px;
    background-color: slategray;
    border-radius: 50%;
`
const Tags = styled.div`
    display: flex;
    overflow: scroll;
    gap: 10px;
`
const Tag = styled.div`
    white-space: nowrap; 
    font-weight: 300;
    background-color: hsl(${props=> props.hue || 0}deg 80% 50% / 25%);
    color: hsl(${props=> props.hue || 0} 80% 30% / 100%);
    padding: 8px 10px;
    border-radius: 6px;
`