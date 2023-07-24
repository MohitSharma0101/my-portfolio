export const stack = {
    html: "html5",
    css: "css",
    js: "js",
    nextjs: "nextjs",
    sass: "sass",
    reactjs: "reactjs",
    android: "android",
    kotlin: "kotlin",
    java: "java",
    firebase: "firebase",
    figma: "figma",
    aws: "aws",
    lambda: "lambda",
    dynamoDb: "dynamoDb",
    s3: "s3",
}


const projects = [
    {
        cover: "cryptoverse",
        title: "Cryptoverse",
        color: `#35c2e1`,
        liveLink: "https://cryptoverse-ui.vercel.app/",
        desc: "Cryptoverse is a Next.js web app utilizing CoinRanking API for displaying Top Crypto Currencies in real-time and Bing Search API for up-to-date Crypto Currencies news.",
        source: "https://github.com/MohitSharma0101/cryptoverse",
        techStack: [
            stack.html,
            stack.js,
            stack.figma,
            stack.nextjs,
        ]
    },
    {
        cover: "thendroidway",
        title: "The Android Way",
        color: "lightseagreen",
        liveLink: "https://the-android-way.vercel.app/",
        desc: "Created a comprehensive Android-focused Web Application offering in-depth tutorials, UI components, and code snippets to empower the Android community.",
        source: "https://github.com/MohitSharma0101/TheAndroidWay",
        techStack: [
            stack.html,
            stack.sass,
            stack.js,
            stack.figma,
            stack.nextjs,
        ]
    },
    {
        cover: "visionwallpapers",
        title: "Vision Wallpapers",
        color: "#48759a",
        liveLink: "",
        desc: "A Simple & Elegant Wallpaper App powered by Wallpaper Abyss API.",
        source: "https://github.com/MohitSharma0101/Vision_Wallpapers",
        techStack: [
            stack.figma,
            stack.kotlin,
            stack.android,
        ]
    },
    {
        cover: "virtualnews",
        title: "Virtual News",
        color: "#2e8fff",
        liveLink: "",
        desc: "News Feed app that gives a user regularly-updated news from the internet related to a particular topic, person, or location.",
        source: "http://github.com/MohitSharma0101/Virtual_News",
        techStack: [
            stack.figma,
            stack.kotlin,
            stack.android,
        ]
    },
    {
        cover: "letschat",
        title: "Lets Chat",
        color: "#405ff3",
        liveLink: "",
        desc: "Lets Chat is an android application that allow users to chat with their contancts or meet people globally.",
        source: "https://github.com/MohitSharma0101/Lets_Chat",
        techStack: [
            stack.figma,
            stack.kotlin,
            stack.android,
        ]
    },
]

export default projects;