import styled from "styled-components";

export default function TagWithIcon({ text, color, backgroundColor, Icon, link, iconDirection }) {
    return (
        <a href={link} target="_blank">
            <Wrapper color={color} backgroundColor={backgroundColor} iconDirection={iconDirection}>
                {text}
                <Icon />
            </Wrapper>
        </a>
    );
};

const Wrapper = styled.div`
    padding: 6px 10px;
    border-radius: 6px;
    color: ${props => props.color || "white"};
    background-color: ${props => props.backgroundColor || props.theme.accent || "deepskyblue"};
    box-shadow: 0 0 0 2px #ffffffb5 inset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:8px;
    width: fit-content;
    font-size: .75rem;
    font-weight: 400;
    cursor: pointer;
    flex-direction: ${props => props.iconDirection === "start" ? "row-reverse" : "row" || "row"};
`;
