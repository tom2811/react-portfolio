import React from "react";
import styles from "./Hero.module.css";
import Typewriter from "typewriter-effect";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}><span className={styles.titleSpan}>Hi, I'm</span>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ["Oak Soe Thein", "Tom"],
                            wrapperClassName: styles.typeWriterText
                        }}
                    />
                </h1>
                <p className={styles.description}>I am a self-driven Frontend Developer and I like to craft solid and scalable frontend products with great user experience.</p>
                <a href="mailto:oaksoe.thein01@gmail.com" className={styles.contactBtn}>Contact Me</a>
                <img src="./assets/hero/hero.png" alt="My Memoji" className={styles.heroImg}/>
                <div className={styles.shadow} />
            </div>
        </section>
    );
};