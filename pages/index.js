import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home - Password Manager</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <div className="body">
                <h1>Password Manager</h1>
            </div>
        </>
    );
}
