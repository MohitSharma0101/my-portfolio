import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Blogs from "./Blogs";
import QUERIES from "../Utils/Queries";

export default function Home() {
    return (
            <Wrapper>
                <InsideWrapper >
                    <Header />
                    <Content id="content" >
                        <About />
                        <Experience />
                        <Projects />
                        <Blogs />
                    </Content>
                </InsideWrapper>
                {/*
                TODO
                <Cursor/>
                */}
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

    p{
        font-weight: 300;
        line-height: 1.5;
        margin-bottom: 1rem;
        color: ${props => props.theme.secondaryText};
    }
`;

const InsideWrapper = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 32px;
    display: flex;
    position: relative;

    @media ${QUERIES.tabletOrSmaller} {
        flex-direction: column;
    }

    @media ${QUERIES.mobileOrSmaller} {
        margin: 0 16px;
    }
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
        
    @media ${QUERIES.tabletOrSmaller} {
        width: 100%;
        position: revert;
        gap: 4rem;
    }
`;