import styled from "styled-components";
import EXPERIENCE from "../Data/ExperienceData";

export default function Experience() {
    return (
        <Wrapper data-section id="exp">
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
    }
    li:hover{
        background-color: ${props => props.theme.onBackground};
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
                <Stack>
                    {
                        exp.techStack.map((icon) => (
                            <Icon key={icon}>
                                <img src={`/images/TechStack/${icon}.svg`} alt="" />
                            </Icon>
                        ))
                    }
                </Stack>
            </Experience.Item.Content>
        </li>
    );
};

Experience.Item.Timeline = styled.div`
    width: 20%;
`;

Experience.Item.Content = styled.div`
    width: 80%;
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
    margin-top: 1rem;
`;

const Icon = styled.div`
    width:60px;
    height: 60px;
    margin-left: -28px;
    transition: all .3s linear;
    cursor: pointer;

    &:hover{
        margin-left: -18px;
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