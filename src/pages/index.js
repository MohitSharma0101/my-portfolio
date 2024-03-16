import Home from "@/components/V2/Home";
import { DARK_THEME } from "@/styles/Theme";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from "next/router";

export default function Portfolio() {
    const router = useRouter();
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
                <SpeedInsights route={router.pathname}/>
                <Analytics />
            </ThemeProvider>
        </>
    );
};