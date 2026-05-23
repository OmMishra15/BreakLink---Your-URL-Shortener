"use client"
import React from 'react'
import './contact.css';
import { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            window.location.href = `mailto:Om.mishra15@gmail.com?subject=Contact&body=${encodeURIComponent(message)}`;
            setMessage('');
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Name: Om Mishra</p>
            <p>Email: Om.mishra15@gmail.com</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                    placeholder="Write your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <br />
                <button type="submit" disabled={!message.trim()}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;