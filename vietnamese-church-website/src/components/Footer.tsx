import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Vietnamese Church. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;