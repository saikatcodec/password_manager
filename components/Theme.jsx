import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoDocumentLock } from "react-icons/io5";
import { GrInfo, GrUserSettings } from "react-icons//gr";
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
                                    <a>
                                        <div className={styles.item_div}>
                                            <span className={styles.item_logo}>
                                                <FaHome />
                                            </span>{" "}
                                            Home
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={"/"}>
                                    <a>
                                        <div className={styles.item_div}>
                                            <span className={styles.item_logo}>
                                                <IoDocumentLock />
                                            </span>{" "}
                                            Password
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={"/"}>
                                    <a>
                                        <div className={styles.item_div}>
                                            <span className={styles.item_logo}>
                                                <GrInfo />
                                            </span>{" "}
                                            About
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={"/"}>
                                    <a>
                                        <div className={styles.item_div}>
                                            <span className={styles.item_logo}>
                                                <GrUserSettings />
                                            </span>{" "}
                                            Settings
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}></div>
            </div>
        </>
    );
}

export default Theme;
