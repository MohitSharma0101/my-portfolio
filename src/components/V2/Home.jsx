import styled from "styled-components";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Blogs from "./Blogs";

export default function Home(){
    return (
        <Wrapper>
            <InsideWrapper >
                <Header />
                <Content id="content" >
                    <About />
                    <Experience />
                    <Projects />
                    <Blogs/>
                </Content>
            </InsideWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
`;

const InsideWrapper = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 24px;
    display: flex;
    position: relative;
`;

const Content = styled.main`
    width: 55%;
    height: 100%;
    position: sticky;
    top: 96px;
    margin: 96px 0;
    display: flex;
    flex-direction: column;
    gap: 6rem;
`;