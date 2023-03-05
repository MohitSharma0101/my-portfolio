import styled from "styled-components"
import { GithubIcon, LinkedInIcon, MailIcon } from "./Icons/Icons"
import Logo from "./Logo"

export default function Footer(){
    return(
        <Wrapper>
            <Logo>
                <span>MS</span>
            </Logo>
            <Social>
                <Link href="mailto:mohit.sha701485@gmail.com" targer="_blank">
                    <MailIcon  color={"black"} />
                </Link>
                <Link href="https://www.linkedin.com/in/mohitsha01/" target="_blank">
                    <LinkedInIcon   color={"black"} />
                </Link>
                <Link href="https://github.com/MohitSharma0101" target="_blank">
                    <GithubIcon  color={"black"} />
                </Link>
            </Social>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 42px 0;
    padding-top: 24px;
    border-top: 1px solid #d2d2d2;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Social = styled.div`
    display: flex;
    gap:8px;
    align-items: center;
`

const Link = styled.a`
    cursor: pointer;

    &:hover{
        svg{
            stroke:deepskyblue;
        }
    }
`
