import React from "react";
import Head from "next/head";

function forget_password() {
    return (
        <>
            <Head>
                <title>Forget password - Password Manager</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <div className="container">
                <h2>Forget your password</h2>
            </div>
        </>
    );
}

export default forget_password;
