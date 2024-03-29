import styled from "styled-components";
import EXPERIENCE from "../Data/ExperienceData";
import TagWithIcon from "../TagWithIcon";
import { AwardIcon } from "../Icons/Icons";
import QUERIES from "../Utils/Queries";
import SectionHeading from "./SectionHeading";

export default function Experience() {
    return (
        <Wrapper data-section id="exp">
             <SectionHeading title={"Experience"}/>
            <Experience.List>
                {
                    EXPERIENCE.map(exp => (
                        <Experience.Item key={exp.company} exp={exp} />
                    ))
                }
            </Experience.List>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    p{
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.5;
        margin-bottom: 0.2rem;
    }
`;

Experience.List = styled.ol`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li{
        display: flex;
        gap: 1rem;
        padding: 1rem;
        cursor: pointer;
        border-radius: 12px;

        @media ${QUERIES.mobileOrSmaller} {
            flex-wrap: wrap;
        }
    }
    @media ${QUERIES.desktopOrLarger} {
            li:hover {
                background-color: ${props => props.theme.onBackground};
            }
    }
`;

Experience.Item = ({ exp }) => {
    return (
        <li>
            <Experience.Item.Timeline>
                {exp.timeline}
            </Experience.Item.Timeline>
            <Experience.Item.Content>
                <Experience.Item.Content.Company>
                    {`${exp.position} · ${exp.company}`}
                </Experience.Item.Content.Company>

                <Experience.Item.Content.About>
                    {exp.about}
                </Experience.Item.Content.About>
                {/* 
                TODO: Replace all the tech stack images with new ones that don't have a background.
                <Stack>
                    {
                        exp.techStack.map((icon) => (
                            <Icon key={icon}>
                                <img src={`/images/TechStack/${icon}.svg`} alt="" />
                            </Icon>
                        ))
                    }
                </Stack> 
                */}
                {
                    exp?.letterOfAppreciation !== "" ?
                        <TagWithIcon
                            text="Letter Of Appreciation"
                            color={"white"}
                            Icon={AwardIcon}
                            link={exp.letterOfAppreciation}
                        />
                        : null}
            </Experience.Item.Content>
        </li>
    );
};

Experience.Item.Timeline = styled.div`
    width: 20%;

    @media ${QUERIES.mobileOrSmaller} {
        width: 100%;
    }
`;

Experience.Item.Content = styled.div`
    width: 80%;

    @media ${QUERIES.mobileOrSmaller} {
        width: 100%;
    }
`;

Experience.Item.Content.Company = styled.h1`
    font-size: 1rem;
    font-weight: 700;
`;

Experience.Item.Content.Position = styled.span`
    font-size: 1rem;
    font-weight: 400;

    &:before {
        content: " | ";
    }
`;

Experience.Item.Content.About = styled.div`
    margin-bottom: 2rem;
    margin-top: 1rem;
`;

const Icon = styled.div`
    width:60px;
    height: 60px;
    margin-left: -28px;
    transition: all .3s linear;
    cursor: pointer;

    @media ${QUERIES.desktopOrLarger} {
        &:hover{
            margin-left: -18px;
        }
    }

    img{
        width:100%;
        height: 100%;
        
    }
`;

const Stack = styled.div`
    display: flex;
    margin: 8px 0;
    flex-grow: 1;
`;