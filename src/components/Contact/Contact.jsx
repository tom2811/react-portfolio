import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact">
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <p className={styles.contactText}>Feel free to contact me</p>
                    <ul className={styles.contactList}>
                        <li>
                            <a href="mailto:oaksoe.thein01@gmail.com"><img src="./assets/contact/emailIcon.png" alt="Email Icon" className={styles.contactImage}/></a>
                        </li>
                        <li>
                            <a href="https://github.com/tom2811"><img src="./assets/contact/githubIcon.png" alt="Github Icon" className={styles.contactImage}/></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/godze.ezgod"><img src="./assets/contact/facebookIcon.png" alt="Facebook Icon" className={styles.contactImage}/></a>
                        </li>
                    </ul>
                </div>
                <form>
                    <input type="text" id="name" placeholder="Enter your name" required></input>
                    <input type="email" id="email" placeholder="Enter your email" required></input>
                    <input type="textarea" id="mesasge" placeholder="Send a mesage" required></input>
                    <button type="submit">Send</button>
                </form>
            </div>
        </footer>
    );
};