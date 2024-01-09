import React from "react";
import styles from "./About.module.css";
import Typewriter from "typewriter-effect";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        strings: ["ABOUT ME"],
                        wrapperClassName: styles.typeWriterText
                    }}
                />
            </h2>
            <a href="#hero"><img src="./assets/about/arrow.png" className={styles.arrow} /></a>
            <div className={styles.content}>
                <img src="./assets/about/about.png" alt="My memoji face" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="./assets/about/frontendIcon.png" alt="Frontend Icon" className={styles.icon1}/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with Experience in building responsive and optimized sites.</p>
                        </div>
                    </li>
                    <li>
                        <img src="./assets/about/heartIcon.png" alt="Heart Icon" className={styles.icon2}/>
                        <div className={styles.aboutItemText}>
                            <h3>Things I Love</h3>
                            <p>Coding<span> 👨🏻‍💻 </span> Basketball<span> 🏀</span> Computer Games<span> 🖥️</span> and learning new things.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};