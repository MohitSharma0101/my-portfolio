import { stack } from "./projectData";

const EXPERIENCE = [
    {
        company: "Amazon Web Services",
        companyURL: "",
        position: "SDE",
        timeline: "Jan - June 2023",
        techStack: [stack.js, stack.java],
        letterOfAppreciation: "https://drive.google.com/file/d/14YTk3EN6SEvmPsLR0Wh7R2OhlWCN9ZEc/view?usp=drive_link",
        about: (
            <>
                <p>
                    Developed a high-performance Dashboard using React, AWS Lambda along with DynamoDB to efficiently manage and
                    manipulate test data for automated test cases running on physical devices.
                </p>
                <p>
                    Contributed 40+ code changes, including comprehensive Unit Tests, auxiliary tools to help with automation and significant
                    bug fixes along with UI/UX improvements.
                </p>
                <p>
                    Successfully resolved 20+ Trouble Tickets within my assigned domain as part of the On-Call duties,
                    addressing issues and ensuring customer satisfaction.
                </p>
            </>
        )
    },
    {
        company: "StartWithGenesis",
        companyURL: "",
        position: "Android Developer",
        timeline: "May - June 2021",
        techStack: [],
        letterOfAppreciation: "https://drive.google.com/file/d/17KasyQneaZ-Ud_HRpO9skfDBR3usP-oX/view",
        about: (
            <>
                <p>
                    Optimized code and improved application structure, resulting in a 50% reduction in load time.
                    Implemented the MVVM architecture pattern and applied best practices.
                </p>
                <p>
                    Designed and implemented 15+ interactive and elegant UI screens across multiple sections of the application,
                    enhancing the overall user experience.
                </p>
                <p>
                    Identified and resolved 27+ bugs, ensuring the application's stability and performance through thorough debugging.
                </p>
            </>
        )
    },
];

export default EXPERIENCE;