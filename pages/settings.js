import React, { useEffect } from "react";
import Head from "next/head";

function Settings() {
    useEffect(() => {
        window.localStorage.setItem("page", "Settings");
    });
    return (
        <>
            <Head>
                <title>Settings - Password Manager</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <div className="container">
                <h2>Settings</h2>
            </div>
        </>
    );
}

export default Settings;
