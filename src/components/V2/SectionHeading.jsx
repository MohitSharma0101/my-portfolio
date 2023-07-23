import styled from "styled-components";
import QUERIES from "../Utils/Queries";

export default function SectionHeading({title}) {
    return (
        <Wrapper>
            {title}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: .1em;
    font-size: .875rem;
    line-height: 1.25rem;
    margin-bottom: 1rem;
    position: sticky;
    top:0;
    background-color: ${props => props.theme.background};

    @media ${QUERIES.tabletOrSmaller} {
        display: revert;
    }
`;