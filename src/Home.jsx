import React from 'react';
import AboutUs from './AboutUs';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';

document.title = "PexelIdentifier";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutUs />
            <Features />
            <Footer />
        </>
    );
}

export default Home;
