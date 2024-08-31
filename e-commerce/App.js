import React from 'react';
/* Navbar from './components/Navbar';*/
/*import SignUpForm from './components/SignUpForm';*/
/* HeroImage from './components/HeroImage';
import Footer from './components/Footer';
import './style.css';*/

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="main-content">
                <HeroImage />
                <SignUpForm />
            </div>
            <Footer />
        </div>
    );
};

export default App;
