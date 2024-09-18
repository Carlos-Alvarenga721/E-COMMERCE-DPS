import React from 'react';
import Navbar from './components/Navbar';
import SignUpForm from './components/SingUpForm';

/*import HeroImage from './components/HeroImage';*/
import Footer from './components/Footer';
import './style.css';

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
        /*<div className="App">
            <Navbar/>
            <SignUpForm/>
            <h1>Prueba de que si corre 🥵</h1>
            <div className="main-content">
                
            </div>
        </div>*/
    );
};

export default App;
