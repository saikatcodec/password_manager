import Head from "next/head";
import React, { useEffect } from "react";
import styles from "../styles/About.module.css";

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

            <div className={styles.container}>
                <h2 className={styles.title}>About</h2>
                <div className={styles.body}>
                    <section className={styles.products}>
                        <h4 className={styles.products_titles}>
                            About Our Products
                        </h4>
                        <p className={styles.products_body}>
                            Password Manager is a web-application where you can
                            save your password i.e Bank accounts, Social Media
                            accounts, and other websites password. We can save
                            information with encryption that encryption key
                            provides by you. So your password stay in safe and
                            secure.
                            <br />
                            And you can login with your google, facebook, apple
                            account and register with our database.
                        </p>
                    </section>
                    <section className={styles.developer}>
                        <h4 className={styles.developer_titles}>Developer</h4>
                        <p className={styles.developer_body}>
                            Password Manager is an open source project. Source
                            codes are available on{" "}
                            <a
                                href="https://github.com/saikatcodec/password_manager"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <br />
                            Developed By{" "}
                            <a
                                href="https://github.com/saikatcodec"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Saikat Acharjee Joy
                            </a>
                        </p>
                    </section>
                    <section className={styles.contactus}>
                        <h4 className={styles.contactus_titles}>
                            Contact with us
                        </h4>
                        <p className={styles.contactus_body}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error dolores nisi sit cum dolorum! Pariatur
                            ipsum deleniti officia quia incidunt temporibus
                            deserunt sunt, dolor minima libero corporis, magni
                            earum nostrum.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}

export default About;
