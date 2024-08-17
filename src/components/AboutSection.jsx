import React from "react";

const AboutSection = () => {
    document.title = "About Ghs Julian | Read And Know More About Myself";
    return (
        <>
            <section id="about">
                <div className="hero-text">
                    <h2>About Myself</h2>
                    <h2>Thanks For Reading Myself !</h2>
                    <article>
                 I'm Julie, a professional web developer and designer.
                 I am a student department of English. I am doing a graduation in English. 
                 Web Development is my hobby and i have learned everything about coding and website development from self learning.
                 Most of them i have learned from Internet.
                 I love my self study. I am from Bangladesh.
                 I live in Bangladesh with my parents in a small village of Bangladesh.
                 Web development and designing is my most favorite one. I love my choice and , i learn new things everyday from the internet.
                 To know more about myself or wanna talk with me please contact me or hire me for your requirements.
                </article>
                </div>
                <div className="hero-img">
                    <img
                        style={{ border: "none" }}
                        id="hero-logo"
                        src="/images/ghs_5.png"
                    />
                </div>
            </section>
        </>
    );
};

export default AboutSection;
