import React from "react";
import styled from "styled-components";
import SectionHeading from "./SectionHeading";

export default function About() {
    return (
        <Wrapper data-section id="about">
            <SectionHeading title={"About"}/>
            <p>
                <strong>Back in <time dateTime="2020">2020</time>,</strong> I took my first dive into the world of programming,
                creating a bunch of apps and instantly falling in love with
                building <strong>digital products</strong> that make a real impact on people's lives.
            </p>
            <p>
                <strong>Fast-forward to today,</strong> and I've had the incredible opportunity to work
                with <strong>Amazon,</strong> taking part in some seriously cool and large-scale projects.
            </p>
            <p>
                Nowadays, I'm juggling freelancing projects while also nurturing an awesome community of developers.
                As a content creator and blogger, I get to share all the amazing stuff
                I build and my experiences along the way.
            </p>
            <p>
                Beyond coding, I'm a huge Marvel fan, absolutely love anime,
                and find myself diving deep into spirituality.
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    p{
        font-weight: 300;
        line-height: 1.5;
        margin-bottom: 1rem;
        color: ${props => props.theme.secondaryText};
    }
`;