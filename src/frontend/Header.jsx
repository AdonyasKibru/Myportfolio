import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style={headerContainerStyle}>
            <nav style={navBoxStyle}>
                <div style={spacer}></div> 
                <div style={linkContainerStyle}>
                    <Link to='/' style={linkStyle}>Home</Link>
                    <Link to='/about' style={linkStyle}>About</Link>
                </div>
            </nav>
        </div>
    );
}

const headerContainerStyle = {
    width: '100%',
    backgroundColor: '#F4F4F6', // Light gray background
    display: 'flex',
    justifyContent: 'center', // Center nav box in page
    padding: '16px 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
};

const navBoxStyle = {
    backgroundColor: '#1F2937',
    width: '90%',
    padding: '12px 24px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
};

const spacer = {
    flexGrow: 1,
};

const linkContainerStyle = {
    display: 'flex',
    gap: '16px',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#06D6A0',
    fontWeight: '600',
    padding: '10px 16px',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
};

export default Header;
