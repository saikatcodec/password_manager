import React from "react";
import Link from "next/link";
import styles from "../styles/Theme.module.css";

function Theme({ children }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.accnt_info}>
                        <div className={styles.heading}>
                            <span className={styles.logo}>P</span>
                            Password Manager
                        </div>
                    </div>
                    <div className={styles.nav_menu}>
                        <ul className={styles.nav_items}>
                            <li className={styles.item}>
                                <Link href={"/"}>
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={"/"}>
                                    <a>Password</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={"/"}>
                                    <a>About</a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={"/"}>
                                    <a>Setting</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>{children}</div>
            </div>
        </>
    );
}

export default Theme;
