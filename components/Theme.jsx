import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaHome, FaInfoCircle, FaShieldAlt } from "react-icons/fa";
import { IoDocumentLock, IoSettings } from "react-icons/io5";
import styles from "../styles/Theme.module.css";

function Theme({ children }) {
    const [page, setPage] = useState("");
    useEffect(() => {
        (() => setPage(window.localStorage.getItem("page")))();
    });

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.accnt_info}>
                        <div className={styles.heading}>
                            <span className={styles.logo}>
                                <BsFillShieldLockFill />
                            </span>
                            PManager
                        </div>
                        <div className={styles.profile}>
                            <Image
                                className={styles.profile_pic}
                                src={"/profile.png"}
                                width={50}
                                height={50}
                                alt={"Avatar"}
                            />
                            <div className={styles.username}>
                                <div className={styles.name}>
                                    Saikat Acharjee Joy
                                </div>
                                <div className={styles.gmail}>
                                    joy29940@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nav_menu}>
                        <ul className={styles.nav_items}>
                            <li className={styles.item}>
                                <Link href={"/"}>
                                    <a>
                                        <div
                                            className={[
                                                styles.item_div,
                                                page === "Home"
                                                    ? styles.active_item_div
                                                    : "",
                                            ].join(" ")}
                                        >
                                            <span
                                                className={[
                                                    styles.item_logo,
                                                    page === "Home"
                                                        ? styles.active_item_logo
                                                        : "",
                                                ].join(" ")}
                                            >
                                                <FaHome />
                                            </span>
                                            Home
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={"/password"}>
                                    <a>
                                        <div
                                            className={[
                                                styles.item_div,
                                                page === "Password"
                                                    ? styles.active_item_div
                                                    : "",
                                            ].join(" ")}
                                        >
                                            <span
                                                className={[
                                                    styles.item_logo,
                                                    page === "Password"
                                                        ? styles.active_item_logo
                                                        : "",
                                                ].join(" ")}
                                            >
                                                <IoDocumentLock />
                                            </span>
                                            Password
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={"/about"}>
                                    <a>
                                        <div
                                            className={[
                                                styles.item_div,
                                                page === "About"
                                                    ? styles.active_item_div
                                                    : "",
                                            ].join(" ")}
                                        >
                                            <span
                                                className={[
                                                    styles.item_logo,
                                                    page === "About"
                                                        ? styles.active_item_logo
                                                        : "",
                                                ].join(" ")}
                                            >
                                                <FaInfoCircle />
                                            </span>
                                            About
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href={"/settings"}>
                                    <a>
                                        <div
                                            className={[
                                                styles.item_div,
                                                page === "Settings"
                                                    ? styles.active_item_div
                                                    : "",
                                            ].join(" ")}
                                        >
                                            <span
                                                className={[
                                                    styles.item_logo,
                                                    page === "Settings"
                                                        ? styles.active_item_logo
                                                        : "",
                                                ].join(" ")}
                                            >
                                                <IoSettings />
                                            </span>
                                            Settings
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer}>
                        <p className={styles.footer_text}>
                            &copy;Copyright 2022
                            <br />
                            All rights reserved
                        </p>
                    </div>
                </div>
                <div className={styles.right}>{children}</div>
            </div>
        </>
    );
}

export default Theme;
