import styled from "styled-components"
import BlogCard from "./BlogCard"
import blogs from "./Data/blogData"
import SectionHeading from "./SectionHeading"

export default function BlogSection(){
    
    return (
        <Wrapper id="blogs">
            <SectionHeading title={"Blogs"}/>
            <BlogList>
                {
                    blogs.map((blog)=>(
                        <BlogCard key={blog.title} {...blog}/>
                    ))
                }
            </BlogList>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: 42px;
`

const BlogList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`