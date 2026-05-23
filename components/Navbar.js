"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsOpen(false); 
            }
        };

        
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    const menuStyles = {
        display: !isMobile || isOpen ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        
        ...(isMobile && isOpen && {
            flexDirection: 'column',
            position: 'absolute',
            top: '4rem',
            right: '1rem',
            background: 'linear-gradient(to right, #6b46c1, #d53f8c, #e53e3e)',
            padding: '1rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '200px',
            zIndex: 50,
        })
    };

    return (
        <nav style={{
            height: '4rem',
            background: 'linear-gradient(to right, #6b46c1, #d53f8c, #e53e3e)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 1.25rem',
            gap: '1rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            position: 'relative'
        }}>
            
            <div style={{
                fontStyle: 'italic',
                fontWeight: 'bold',
                fontSize: '1.125rem',
                color: 'white',
                cursor: 'pointer'
            }}>
                <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
                    BreakLink
                </Link>
            </div>

            
            <button 
                onClick={toggleMenu}
                style={{
                    display: isMobile ? 'block' : 'none',
                    color: 'white',
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer'
                }}
            >
                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            
            <ul style={menuStyles}>
                <Link href="/shorten" style={{ textDecoration: 'none' }}>
                    <li style={{ color: 'white', cursor: 'pointer' }}>Shorten URL</li>
                </Link>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                    <li style={{ color: 'white', cursor: 'pointer' }}>Contact Us</li>
                </Link>
                <Link href="/about" style={{ textDecoration: 'none' }}>
                    <li style={{ color: 'white', cursor: 'pointer' }}>About</li>
                </Link>
                <Link href="/shorten" style={{ textDecoration: 'none' }}>
                    <li style={{
                        background: '#9f7aea',
                        borderRadius: '9999px',
                        padding: '0.25rem 0.75rem',
                        fontWeight: 'bold',
                        color: 'white',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>Try Now</li>
                </Link>
                <Link href="/github" style={{ textDecoration: 'none' }}>
                    <li style={{
                        background: '#9f7aea',
                        borderRadius: '9999px',
                        padding: '0.25rem 0.75rem',
                        fontWeight: 'bold',
                        color: 'white',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>GitHub</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;