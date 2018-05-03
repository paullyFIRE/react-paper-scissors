import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '4vh',
        textAlign: 'center',
        paddingTop: '5px',
        borderTop: '1px black solid',
        backgroundColor: '#2980b9'
      }}
    >
      <Link to="/about">
        <p style={{ color: 'white', fontSize: '1.5rem' }}>Created by Paul Patterson</p>
      </Link>
    </div>
  );
};

export default Footer;
