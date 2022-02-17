import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AboutUsLandingGraphic from '../assets/AboutUsLandingGraphic.svg';

function AboutUsPage(){
    return(
        <div className="flex flex-col w-full">
            <Header />
            <div>
                <h1 className="text-dark-blue font-semibold sm:my-16 text-center xl:text-left tracking-wide xl:absolute xl:left-24 xl:top-72 text-3xl xl:text-6xl">{'{'}About Us{'}'}</h1>
                <h1 className="text-header-orange font-semibold text-center tracking-wide xl:absolute xl:right-24 xl:bottom-0 text-3xl xl:text-4xl AboutUsText">Cultivating a thriving community of data science professionals at UCLA</h1>
                <img src={AboutUsLandingGraphic} alt="Graphs"/>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage;