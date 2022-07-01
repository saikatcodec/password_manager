import Head from "next/head";
import { BsFillShieldLockFill } from "react-icons/bs";
import styles from "../styles/Home.module.css";

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

            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2 className={styles.app_name}>
                        <span className={styles.logo}>
                            <BsFillShieldLockFill />
                        </span>
                        PManager
                    </h2>
                    <p className={styles.heading_text}>
                        Fast and Secure Password Manager
                    </p>
                </div>
            </div>
        </>
    );
}
