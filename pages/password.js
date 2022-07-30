import React, { useEffect } from "react";
import Head from "next/head";

function ShowPassword() {
    useEffect(() => {
        window.localStorage.setItem("page", "Password");
    });
    return (
        <>
            <Head>
                <title>Password - Password Manager</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <div className="container">
                <h2>List of all Password</h2>
            </div>
        </>
    );
}

export default ShowPassword;
