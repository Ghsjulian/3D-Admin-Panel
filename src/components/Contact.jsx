import React from "react";

const Contact = () => {
    document.title =
        "Contact With Me - If You want to hire me you can contact me here";
    return (
        <section id="about">
            <div className="hero-text">
                <h2>Contact With Me !</h2>
                <article data-aos="zoom-in">
                    Full Free to contact with me , as soon as possible I'll
                    response you. here's the contact form it's a demo only . if
                    you really want to contact me then send messages me on my
                    Facebook or My Email. The contact form won't be work, so
                    don't try to contact here.
                </article>
            </div>
            <div className="hero-img">
                <div className="form">
                        <h3>Fill Out This Form</h3>
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="number" placeholder="Enter Your Phone" />
                        <input type="email" placeholder="Enter Your Email" />
                        <textarea placeholder="Write Your MpostMessage..."></textarea>
                        <button className="contact-btn">Send Messages</button>
                    </div>
            </div>
        </section>
    );
};

export default Contact;
