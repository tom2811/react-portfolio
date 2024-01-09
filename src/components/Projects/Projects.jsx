import React from "react";
import styles from "./Projects.module.css";
import index from "../../data/index.json";
import Typewriter from "typewriter-effect";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        strings: ["PROJECTS"],
                        wrapperClassName: styles.typeWriterText
                    }}
                />
            </h2>
            <div className={styles.projects}>{
                index.map((index, id) => {
                    return <div key={id}>
                        <img src={index.imageSrc} alt={`Image of ${index.title}`} className={styles.projectImage}/>
                        <h3>{index.title}</h3>
                        <p>{index.description}</p>
                        <ul className={styles.projectList}>
                            {index.skills.map((skill, id) => {
                                return (
                                <li key={id}>{skill}</li>);
                            })}
                        </ul>
                        <div className={styles.btnWrapper}>
                            <a href={index.demo} className={styles.projectDemo}>Demo</a>
                            <a href={index.source} className={styles.projectDemo}>Source</a>
                        </div>
                    </div>
                })}</div>
        </section>
    );
};