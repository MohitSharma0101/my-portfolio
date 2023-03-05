import styled from "styled-components"
import Highlight from "./Highlight"
import { AwardIcon, ExternalLinkIcon } from "./Icons/Icons"
import SectionHeading from "./SectionHeading"
import TagWithIcon from "./TagWithIcon"

export function Timeline({timeline}) {
    return (
        <Wrapper id="timeline">
            <SectionHeading title={"Timeline"}/>
            <Content>
                {
                    timeline.map((event) => {
                        return (
                            <>
                                <YearDesc key={event.companyName} {...event} />
                                <Year key={event.year}>
                                    {event.year.slice(0, 2)}
                                    <Highlight color={event.yearColor}>
                                        {event.year.slice(2, 4)}
                                    </Highlight>
                                </Year>
                            </>
                        )
                    })
                }
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 42px 0;
`

const Content = styled.div`
   
    position: relative;

    &::before{
        content:"";
        display: inline-block;
        width: 6px;
        height: 100%;
        position: absolute;
        margin-left: 12px;
        background-color: #ebebeb;
        z-index: -1;
        border-radius: 4px;
    }
`

const Year = styled.div`
    font-size: 3rem;
    font-weight: 700;
    background-color: white;
`


function YearDesc(props) {
    return (
        <YearDescWrapper>
            <CompanyName href={props.companyWebsite} target="_blank" color={props.yearColor}>
                {props.companyName}
                {props.companyName !== "" ? <ExternalLinkIcon color={"#d2d2d2"}/>:null }
                </CompanyName>
            <WorkProfile>{props.workProfile}</WorkProfile>
            <WorkDesc>
                {props.workDesc}
            </WorkDesc>
            {
                props.letterOfAppreciation !== ""   ?
                    <TagWithIcon
                        text="Letter Of Appreciation"
                        color={"white"}
                        backgroundColor={props.yearColor}
                        Icon={AwardIcon}
                        link={props.letterOfAppreciation}
                    />
                    : null}

        </YearDescWrapper>
    )
}

const YearDescWrapper = styled.div`
    margin: 16px 0;
    margin-left: 50px;
`

const CompanyName = styled.a`
    font-size: 3rem;
    font-weight: 700;
    cursor: pointer;
    transition: color .1s linear;

    &:hover{
        color:${props=> props.color || "black"};

        svg{
            transition: all .1s linear;
            transform: translatex(0%);
            visibility: visible;
        }
    }

    svg{
        transform: translatex(-24px);
        z-index: -1;
        visibility: hidden;
        transition: all .2s linear;
        margin: 0 4px;
    }
`

const WorkProfile = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
`

const WorkDesc = styled.p`
    font-weight: 300;
    font-size: 1rem;
    white-space: pre-line;
`
