import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '5px',
                borderTop: '1px black solid',
                backgroundColor: '#2980b9'
            }}>
            <Link to='/about'>
                <p style={{ color: 'white', fontSize: '20px' }}>Created by Paul</p>
            </Link>
        </div>
    );
};

export default Footer;