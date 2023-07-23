import Home from "@/components/V2/Home";
import { DARK_THEME } from "@/styles/Theme";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function PortfolioV2() {
    return (
        <>
            <Head>
                <title>Mohit Sharma</title>
                <meta name="description" content="Personal Portfolio of Mohit Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/mslogo.ico" />
            </Head>
            <ThemeProvider theme={DARK_THEME}>
                <Home />
            </ThemeProvider>
        </>
    );
};