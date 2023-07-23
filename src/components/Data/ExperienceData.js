import { stack } from "./projectData";

const EXPERIENCE = [
    {
        company: "Amazon Web Services",
        companyURL: "",
        position: "SDE",
        timeline: "Jan - June 2023",
        techStack: [ stack.js, stack.java],
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
        timeline: "Jan - June 2023",
        techStack: [],
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