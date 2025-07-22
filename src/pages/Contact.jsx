import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Get in Touch!</h2>
            <form>
                <label>Name:</label>
                <input type="text" name="name" />
                <label>Email:</label>
                <input type="email" name="email" />
                <label>Message:</label>
                <textarea name="message" />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
