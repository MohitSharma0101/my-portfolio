import { MenuIcon } from "./Icons/Icons"
import styled, { keyframes } from "styled-components"

export default function NavBar() {
    return (
        <Wrapper>
            <Logo >
                <span>MS</span>
            </Logo>
            <MenuItems />
            <MenuIcon color={"black"} />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    max-width: 900px;
    width:100%;
    background-color: white;
    color:black;
    border-radius:12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;

    svg{
        cursor: pointer;
    }
`

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

function MenuItems() {
    const items = ["Home", "Timeline", "Projects", "Blogs", "About Me"]
    return (
        <MenuNavWrapper>
            {
                items.map((item) => (<Item key={item}>{item}</Item>))
            }
        </MenuNavWrapper>
    )
}

const MenuNavWrapper = styled.nav`
    display: flex;
    gap: 16px;
`

const Item = styled.div`
    font-weight: 300;
    cursor: pointer;
    padding: 4px;
    
    transition: all 20s ease-in-out;

    &:after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        margin-top: 4px;
        background: deepskyblue;
        transition: width .3s;
    }

    &:hover::after{
            width:100%;
    }

    
`