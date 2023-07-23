import styled from "styled-components";
import blogs from "../Data/blogData";

export default function Blogs() {
    return (
        <Wrapper data-section id="blog">
            <List>
                {
                    blogs.map((blog) => (
                        <Blog href={blog.link} target="_blank">
                            <Cover>
                                <img src={`/images/blogs/${blog.cover}`} alt={blog.title} />
                            </Cover>
                            <Content>
                                <div>
                                    <Title>
                                        {blog.title}
                                    </Title>
                                    <Description >
                                        {blog.desc}
                                    </Description>
                                </div>

                                <Tags >
                                    {
                                        blog.tags.map((tag) => (
                                            <Tag key={tag}>{tag}</Tag>
                                        ))
                                    }
                                </Tags>
                            </Content>
                        </Blog>
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

const Cover = styled.div`
    width: 150px;
    aspect-ratio: 11/10;
    overflow: hidden;
    transition: all .3s ease; 
    border-radius: 12px;
    border: 2px solid hsl(0 0% 50%);
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all .2s linear;
    }
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

const Tags = styled.div`
    display: none;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 0.75rem;
    font-weight: 400;
`;

const Tag = styled.div`
    border: 1px solid ${props => props.theme.accent};
    color: white;
    padding: 6px 8px;
    border-radius: 6px;
`;

const Content = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Blog = styled.a`    
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-radius: 12px;

    &:hover ${Cover}{
        width: 300px;
    }

    &:hover ${Tags}{
        display: flex;
    }

    &:hover ${Title}{
        color: ${props => props.theme.accent};
    }

    &:hover{
        background-color: ${props => props.theme.onBackground};
    }
`;