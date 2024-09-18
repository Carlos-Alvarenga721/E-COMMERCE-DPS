import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Exclusive</h4>
                <p>Get 10% off your first order</p>
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-section">
                <h4>Support</h4>
                <p>Address, Email, Phone</p>
            </div>
            <div className="footer-section">
                <h4>Account</h4>
                <ul>
                    <li>My Account</li>
                    <li>Login/Register</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
