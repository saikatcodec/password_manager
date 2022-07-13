import Head from "next/head";
import { BsFillShieldLockFill } from "react-icons/bs";
import Login from "../components/Login";
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
                <div className={styles.section}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>
                            How Important Password Is?
                        </h2>
                        <h4 className={styles.subtitle}>Need to Store?</h4>
                        <br />
                        <p className={styles.text}>
                            {`Don't worried. We have a solution, just remember one password to access all password.`}
                        </p>
                    </div>
                    <div className={styles.right}>
                        <Login />
                    </div>
                </div>
            </div>
        </>
    );
}
