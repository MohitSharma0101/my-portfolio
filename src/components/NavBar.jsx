import { MenuIcon } from "./Icons/Icons"
import styled, { keyframes } from "styled-components"
import Logo from "./Logo"

export default function NavBar() {
    return (
        <Wrapper>
            <Logo>
                <span>MS</span>
            </Logo>
            <MenuItems />
            {/* <MenuIcon color={"black"} /> */}
        </Wrapper>
    )
}


const Wrapper = styled.div`
    max-width: 900px;
    width:100%;
    background-color: white;
    color:black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 10px;
    position: fixed;
    top: 0;
    z-index: 2;

    svg{
        cursor: pointer;
    }
`


function MenuItems() {
    const items = ["Home", "Timeline", "Projects", "Blogs"]
    return (
        <MenuNavWrapper>
            {
                items.map((item) => (<Item key={item} onClick={()=>{
                    const section = document.getElementById(item.toLocaleLowerCase());
                    section.scrollIntoView({behavior:"smooth"})
                }}>{item}</Item>))
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