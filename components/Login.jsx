import React from "react";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import styles from "../styles/Login.module.css";

function Login() {
    return (
        <div className={styles.login_container}>
            <h3 className={styles.heading}>SIGNIN</h3>
            <form method="post" className={styles.form}>
                <span className={styles.username_icon}>
                    <input
                        type="text"
                        className={styles.username}
                        name="username"
                        placeholder="Username"
                    />
                </span>
                <span className={styles.password_icon}>
                    <input
                        type="password"
                        className={styles.password}
                        name="password"
                        placeholder="Password"
                    />
                </span>
                <button className={styles.submit_btn} type="submit">
                    SIGNIN
                </button>
            </form>
            <div className={styles.forget}>
                <Link href={"/forget_password"}>
                    <a>Forget Password?</a>
                </Link>
            </div>
            <div className={styles.another_login}>
                <div className={styles.item_1}>
                    <Link href={"/"}>
                        <a>
                            <FaGoogle />
                        </a>
                    </Link>
                </div>
                <div className={styles.item_2}>
                    <Link href={"/"}>
                        <a>
                            <FaFacebook />
                        </a>
                    </Link>
                </div>
                <div className={styles.item_3}>
                    <Link href={"/"}>
                        <a>
                            <FaApple />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
