import React, { useEffect } from "react";
import Head from "next/head";

function About() {
    useEffect(() => {
        window.localStorage.setItem("page", "About");
    });
    return (
        <>
            <Head>
                <title>About - Password Manager</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <div className="container">
                <h2>About Page</h2>
            </div>
        </>
    );
}

export default About;
