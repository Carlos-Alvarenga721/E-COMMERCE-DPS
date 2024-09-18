import React from 'react';
import '../styles/SignUpForm.css';

const SignUpForm = () => {
    return (
        <div className="signup-form">
            <h2>Create an account</h2>
            <p>Enter your details below</p>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email or Phone Number" />
            <input type="password" placeholder="Password" />
            <button className="create-account-btn">Create Account</button>
            <button className="google-signup-btn">Sign up with Google</button>
            <p>Already have an account? <a href="/">Log in</a></p>
        </div>
    );
};

export default SignUpForm;
