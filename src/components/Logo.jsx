import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

const Logo = styled.div`
    width: 45px;
    height: 45px;
    border: 2px solid lavender;
    position: relative;
    cursor: pointer;

    &:hover{
        animation: ${rotate} 2s linear infinite;
    }
    

    span{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 2px 4px;
        color: crimson;
    }

`

export default Logo;