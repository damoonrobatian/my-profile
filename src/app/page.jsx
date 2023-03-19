"use client"

import clsx from "classnames"
import { useState } from "react"
import { MY_EMAIL } from "@/globals"
import styles from "./page.module.css"

export default function Home() {
    const [clicked, setClicked] = useState(false)

    const copyEmailToClipboard = () => {
        const email = MY_EMAIL
        navigator.clipboard.writeText(email)
        setClicked(true)
        setTimeout(() => setClicked(false), 1000) // remove the 'clicked' class after 1 seconds
    }

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Hello!</h1>
            <p className={styles.text}>
                Welcome to my personal website! I'm passionate about programming
                and enjoy creating innovative solutions to complex problems.
                Here, you'll find my portfolio, blog, and ways to connect with
                me. Feel free to explore and get in touch!
            </p>
            <p
                className={clsx(styles.email, { [styles.clicked]: clicked })}
                onClick={copyEmailToClipboard}
            >
                {MY_EMAIL}
            </p>
        </section>
    )
}
