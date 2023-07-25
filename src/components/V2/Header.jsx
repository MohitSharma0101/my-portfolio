import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { GithubIcon, LinkedInIcon, MailIcon, TwiterIcon } from "../Icons/Icons";
import QUERIES from "../Utils/Queries";

export const NAV_LINKS = [
    {
        id: "about",
        name: "About",
    },
    {
        id: "exp",
        name: "Experience",
    },
    {
        id: "project",
        name: "Projects",
    },
    {
        id: "blog",
        name: "Blog",
    },
];

const SOCIAL_LINKS = [
    {
        id: "github",
        icon: (<GithubIcon stroke={1.8} size={26} />),
        link: "https://github.com/MohitSharma0101",
    },
    {
        id: "linkedin",
        icon: (<LinkedInIcon size={26} stroke={1.8} />),
        link: "https://www.linkedin.com/in/mohitsha01/",
    },
    {
        id: "twitter",
        icon: (<TwiterIcon size={26} stroke={1.8} />),
        link: "",
    },
    {
        id: "mail",
        icon: (<MailIcon size={26} stroke={1.8} />),
        link: "mailto:mohit.sha701485@gmail.com",
    },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        //create new instance and pass a callback function
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            //Update state with the visible section ID
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, {
            rootMargin: "0px",
            threshold: [0.2,1],
        });
        //Get custom attribute data-section from all sections
        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });
        //Cleanup function to remove observer
        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    return (
        <Wrapper>
            <Navigation>
                <Info>
                    <Name>
                        Mohit Sharma
                    </Name>
                    <Title>
                        Software Developer | Previosly at Amazon
                    </Title>
                    <Description>
                        Driven by curiosity, creating dynamic digital experiences for the web and app.
                    </Description>
                </Info>
                <Navigation.List>
                    {
                        NAV_LINKS.map((link) => (
                            <Navigation.Item
                                key={link.id}
                                active={link.id === activeSection}
                                onClick={() => {
                                    const section = document.getElementById(link.id);
                                    section.scrollIntoView({ behavior: "smooth" })
                                }}
                            >
                                <Navigation.Link >
                                    {link.name}
                                </Navigation.Link>
                            </Navigation.Item>
                        ))
                    }
                </Navigation.List>
            </Navigation>
            <Social>
                {
                    SOCIAL_LINKS.map((item) => (
                        <Social.Item key={item.id}>
                            <Social.Link href={item.link} target="_blank">
                                {item.icon}
                            </Social.Link>
                        </Social.Item>
                    ))
                }

            </Social>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    width: 45%;
    height: 100vh;
    padding: 6rem 0;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:1.8rem;

    @media ${QUERIES.tabletOrSmaller} {
        position: revert;
        height: fit-content;
        gap: 2rem;
        padding: 56px 0;
        width: 100%;
    }
`;

const Info = styled.section`

`;

const Name = styled.h1`
    font-size: 3rem;
    line-height: 1;
`;

const Title = styled.h2`
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 500;
    margin-top: 0.75rem;
`;

const Description = styled.p`
    font-weight: 300;
    max-width: 20rem;
    line-height: 1.5;
    margin-top: 1rem;
`;

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

Navigation.List = styled.ul`
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    @media ${QUERIES.tabletOrSmaller} {
        display: none;
    }
`;

Navigation.Item = styled.li`
    position: relative;
    width: 50%;
    font-size: ${props => props.active ? '2rem' : '0.75rem'};
    transition: all 0.2s ease;
    cursor: pointer;
    &:before{
        content: "";
        display: block;
        width: ${props => props.active ? '4px' : '0px'};
        height: 100%;
        background-color: deepskyblue;
        position: absolute;
        margin-left: -12px;
    }
    
    @media ${QUERIES.desktopOrLarger} {
        &:hover{
            font-size: 2rem;
        }
        &:hover::before{
            width: 4px;
        }
    }
`;

Navigation.Link = styled.a`
    cursor: pointer;
    text-transform: uppercase;
    line-height: 1;
    font-weight: 700;
`;

const Social = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
`;

const jump = keyframes`
    from {
        transform: translate(0);
    }
    to {
        transform: translateY(-8px);
    }
`

Social.Item = styled.li`
    svg{
        margin: 4px;
    }
    @media ${QUERIES.desktopOrLarger} {
        svg:hover {
            stroke: ${props => props.theme.accent};;
            animation: ${jump} .4s infinite ease alternate;
        }
    }
`;

Social.Link = styled.a`

`;