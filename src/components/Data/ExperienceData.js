import StyledLink from "../V2/StyledLink";
import { stack } from "./projectData";

const EXPERIENCE = [
  {
    company: "Cars24",
    companyURL: "",
    position: "SDE-1",
    timeline: "Dec 2023 - Present",
    techStack: [stack.nextjs],
    letterOfAppreciation: "",
    about: (
      <>
        <p>
          Enhanced the newly introduced INP (Interaction to Next Paint) metric
          from 600ms to 250ms.
        </p>
        <p>
          Overhauled the entire codebase in 3 weeks, boosting core web vitals by
          30% for the customer-facing platform and achieving a 68% performance
          increase using Next.js.
        </p>
        <p>
          Optimized Total Blocking Time (TBT) and First Contentful Paint (FCP)
          by 70% through strategic Server-Side Rendering (SSR) implementation.
        </p>
        <p>
          Reduced Largest Contentful Paint (LCP) by 50% via resource preloading
          and improved Cumulative Layout Shift (CLS) by 98% through advanced
          pre-rendering techniques and dynamic loading states.
        </p>
      </>
    ),
  },
  {
    company: "Future Byte Innovations",
    companyURL: "",
    position: "Full Stack Developer",
    timeline: "Sept 2023 - Dec 2023",
    techStack: [stack.nextjs],
    letterOfAppreciation: "",
    about: (
      <>
        <p>
          Conceptualized and developed multiple products, including an{" "}
          <StyledLink target="_blank" href="https://www.blessedstems.com/">
            Ecommerce Store
          </StyledLink>
          , a health blog for
          <StyledLink
            target="_blank"
            href="https://redcliffelabs.com/myhealth/"
          >
            Redcliffe Labs
          </StyledLink>
          , and a landing website for{" "}
          <StyledLink target="_blank" href="https://www.bytewizards.ae/">
            IT service company
          </StyledLink>
          , using Next.js and TypeScript, achieving a 40% time-saving on
          deadlines.
        </p>
        <p>
          Contributed 40+ code changes, including comprehensive Unit Tests,
          auxiliary tools to help with automation and significant bug fixes
          along with UI/UX improvements.
        </p>
        <p>
          Successfully resolved 20+ Trouble Tickets within my assigned domain as
          part of the On-Call duties, addressing issues and ensuring customer
          satisfaction.
        </p>
      </>
    ),
  },
  {
    company: "Amazon Web Services",
    companyURL: "",
    position: "SDE",
    timeline: "Jan - June 2023",
    techStack: [stack.js, stack.java],
    letterOfAppreciation:
      "https://drive.google.com/file/d/14YTk3EN6SEvmPsLR0Wh7R2OhlWCN9ZEc/view?usp=drive_link",
    about: (
      <>
        <p>
          Developed a high-performance Dashboard using React, AWS Lambda along
          with DynamoDB to efficiently manage and manipulate test data for
          automated test cases running on physical devices.
        </p>
        <p>
          Contributed 40+ code changes, including comprehensive Unit Tests,
          auxiliary tools to help with automation and significant bug fixes
          along with UI/UX improvements.
        </p>
        <p>
          Successfully resolved 20+ Trouble Tickets within my assigned domain as
          part of the On-Call duties, addressing issues and ensuring customer
          satisfaction.
        </p>
      </>
    ),
  },
  {
    company: "StartWithGenesis",
    companyURL: "",
    position: "Android Developer",
    timeline: "May - June 2021",
    techStack: [],
    letterOfAppreciation:
      "https://drive.google.com/file/d/17KasyQneaZ-Ud_HRpO9skfDBR3usP-oX/view",
    about: (
      <>
        <p>
          Optimized code and improved application structure, resulting in a 50%
          reduction in load time. Implemented the MVVM architecture pattern and
          applied best practices.
        </p>
        <p>
          Designed and implemented 15+ interactive and elegant UI screens across
          multiple sections of the application, enhancing the overall user
          experience.
        </p>
        <p>
          Identified and resolved 27+ bugs, ensuring the application's stability
          and performance through thorough debugging.
        </p>
      </>
    ),
  },
];

export default EXPERIENCE;
