import styled from "styled-components";
import React, { useContext } from "react";
import { CursorContext } from "./Home";

const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = React.useState({ x: null, y: null });
    React.useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
};

export default function Cursor() {
    const mouse = useMousePosition();
    const { cursor, emoji } = useContext(CursorContext);
    return (
        <Wrapper ref={cursor} id="cursor" color="deepskyblue" x={mouse.x} y={mouse.y}>
            {emoji}
        </Wrapper>
    );
};

const Wrapper = styled.div.attrs(props => ({
    style: {
        left: `calc(${props.x}px + 12px)`,
        top: `calc(${props.y}px + 46px)`
    }
}))
`
    font-size: 2rem;
    position: fixed;
    pointer-events: none;
`;


const useEmoji = (emoji) => {
    const [isHovering, setIsHovering] = React.useState(false);
  
    const handleMouseOver = React.useCallback(() => setIsHovering(true), []);
    const handleMouseOut = React.useCallback(() => setIsHovering(false), []);
  
    const nodeRef = React.useRef();
  
    const callbackRef = React.useCallback(
      node => {
        if (nodeRef.current) {
          nodeRef.current.removeEventListener('mouseover', handleMouseOver);
          nodeRef.current.removeEventListener('mouseout', handleMouseOut);
        }
  
        nodeRef.current = node;
  
        if (nodeRef.current) {
          nodeRef.current.addEventListener('mouseover', handleMouseOver);
          nodeRef.current.addEventListener('mouseout', handleMouseOut);
        }
      },
      [handleMouseOver, handleMouseOut]
    );
  
    return callbackRef;
  };