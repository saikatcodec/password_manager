import React from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";

function Login() {
    return (
        <div className={styles.login_container}>
            <h3 className={styles.heading}>SIGNIN</h3>
            <form method="post" className={styles.form}>
                <input
                    type="text"
                    className={styles.username}
                    name="username"
                    placeholder="Username"
                />
                <input
                    type="password"
                    className={styles.password}
                    name="password"
                    placeholder="Password"
                />
                <button className={styles.submit_btn} type="submit">
                    SIGNIN
                </button>
            </form>
            <div className={styles.another_login}>
                <Link href={"/"}>
                    <a></a>
                </Link>
            </div>
        </div>
    );
}

export default Login;
