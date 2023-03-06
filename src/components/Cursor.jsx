import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Cursor() {
        const [position, setPosition] = useState({x: 0, y: 0});
        const [linkHovered, setLinkHovered] = useState(false);
     
        useEffect(() => {
            addEventListeners();
            handleLinkHoverEvents();
            return () => removeEventListeners();
        }, []);
     
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
        };
     
        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
     
        const onMouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };
        
        const handleLinkHoverEvents = () => {
            document.querySelectorAll("a").forEach((el) => {
                el.addEventListener("mouseover", () => setLinkHovered(true));
                el.addEventListener("mouseout", () => setLinkHovered(false));
            });
        };

        return <Wrapper
                link={linkHovered}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}/>
    }

    const Wrapper = styled.div`
        width: 40px;
        height: 40px;
        border: 2px solid deepskyblue;
        border-radius: 100%;
        position: fixed;
        background-color:  ${props=>props.link ? "black" : "" || ""};;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        transition: all 150ms ease-in-out;
        transition-property: background-color, opacity, transform, mix-blend-mode;
        mix-blend-mode: ${props=>props.link ? "difference" : "" || ""};
        transform: ${props=>props.link ? "scale(1.5)" : "" || ""};
    `