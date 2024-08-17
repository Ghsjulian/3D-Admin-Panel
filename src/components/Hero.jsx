import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
/* Import React Icons */
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

const Hero = () => {
    /*
    const initImg = "./images/ghs_8.png";
    const imgRef = useRef(null);
    useEffect(() => {
        var imgs = "ghs_";
        var count = 1;
        setInterval(() => {
            imgRef.current.src = "images/" + imgs + count + ".png";
            count += 1;
            if (count >= 8) {
                count = 1;
            }
        }, 7000);
    }, []);
*/
    return (
        <section id="hero">
            <div className="hero-text">
                <h2>Hello There ! Welcome To My Portfolio</h2>
                <h3 className="sub-title">
                    <ReactTyped
                        strings={[
                            "Web Developer",
                            "Freelacer",
                            "Full Stack Developer",
                            "Developer - Designer",
                            "Website Developer",
                            "Front-End Developer",
                            "Back-End Developer",
                            "PHP Developer",
                            "SEO Expert",
                            "Ethical Programmer"
                        ]}
                        cursorChar="|"
                        typeSpeed={70} // Adjust typing speed here (milliseconds)
                        backSpeed={60} // Adjust backspace speed (milliseconds)
                        loop // Set to loop through the strings continuously
                    />
                </h3>
                <h4>Let's Know More About Myself</h4>
                <article>
                    I'm Ghs Julian, A Full stack web application developer and
                    designer. I'm from Bangladesh. As a developer i have built
                    my technologies skills. For knowing more about myself please
                    scroll down and read more about myself. You can also hire me
                    for your project or contact with me directly.
                </article>
                <div className="btn-area">
                    <NavLink id="view" to="/contact">
                        Contact Me
                    </NavLink>
                    <NavLink
                        id="shop"
                        download="ghs_julian_cv.pdf"
                        to="/data/cv.pdf"
                    >
                        Download CV
                    </NavLink>
                </div>
                <div className="social">
                    <NavLink to="https://web.facebook.com/ghs.julian.85" target="_blank">
                        <FaFacebookF />
                    </NavLink>
                    <NavLink to="https://twitter.com/@ghsjulian" target="_blank">
                        <IoLogoTwitter />
                    </NavLink>
                    <NavLink to="https://linkedin.com/Ghsjulian" target="_blank">
                        <FaLinkedinIn />
                    </NavLink>
                    <NavLink to="https://youtube.com/@ghsjulian" target="_blank">
                        <FaYoutube />
                    </NavLink>
                    <NavLink to="https://github.com/Ghsjulian" target="_blank">
                        <FaGithub />
                    </NavLink>
                </div>
            </div>
            <div className="hero-img">
                <img id="hero-logo" src="/images/ghs_8.png" />
            </div>
        </section>
    );
};

export default Hero;
