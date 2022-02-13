import React from 'react';
import Header from '../Components/Header'
import HomePageGraphic from '../assets/HomePageGraphic.svg';
import LSoftwareRect from '../assets/L&SoftwareRect.svg';
import onlineGraphic from '../assets/onlineGraphic.svg';
import Footer from '../Components/Footer';
const HomePage=()=>{
    return(
        <div>
        <Header />
        <section>
            <h1 className="text-dark-blue font-semibold sm:my-16 sm:text-center tracking-wide xl:absolute xl:left-24 xl:top-72 text-6xl">Data Science Union</h1>
            <h1 className="text-gray-black tracking-wide sm:my-16 sm:text-center xl:absolute xl:left-24 xl:top-96 text-6xl">UCLA</h1>
            <img src={HomePageGraphic} alt="Graphics" className="w-full"/>
        </section>
        <section className="flex flex-col text-center mx-64 gap-y-4 mb-32">
            <p className="text-dark-blue font-semibold tracking-wide mt-24 text-5xl">Who We Are</p>
            <p className="text-xl mt-12">The Data Science Union is a student organization founded in March of 2019. Our goal is to cultivate a thriving community of data science professionals at UCLA. The three components of our club prepare members for careers in data science: our self-designed curriculum, real-world projects, and professional development opportunities.</p>
        </section>
        <section className="flex flex-col sm:items-center xl:flex-row sm:gap-y-32 xl:mx-32">
            <div className="flex flex-col basis-1/2 sm:gap-y-24 xl:gap-y-32">
                <div className="flex flex-col xl:ml-56">
                    <p className="font-bold text-6xl text-header-orange">12</p>
                    <p className="text-gray-black text-5xl">members</p>
                </div>
                <div className="flex flex-col xl:ml-56">
                    <p className="font-bold text-6xl text-header-orange">10</p>
                    <p className="text-gray-black text-5xl">projects</p>
                </div>
            </div>
            <div className="relative justify-center">
                <p className="absolute sm:top-20 xl:top-16 sm:left-40 xl:left-36 text-3xl tracking-widest font-medium leading-4 text-dark-blue text-center">Language and Software</p>
                <p className="absolute sm:top-32 xl:top-28 sm:left-16 xl:left-6 text-gray-black text-xl text-center LandSoftwareText">
                    Many of our members have prior experience in <span className="text-header-orange font-semibold">R</span> and <span className="text-header-orange font-semibold">RStudio. </span> 
                    Using the Anaconda distribution, our members learn <span className="text-header-orange font-semibold">Python</span> for
                    its popularity among data scientists and extensive applications
                    and libraries. We also integrate <span className="text-header-orange font-semibold">SQL</span> and <span className="text-header-orange font-semibold">mySQL Workbench</span> into
                    our curriculum to expose our members to querying and analyzing data stored in databases
                </p>
                <img src={LSoftwareRect} alt="rectangle"/>
            </div>
        </section>
        <section className="flex flex-row my-32">
            <div className="basis-1/2">
                <img src={onlineGraphic} alt="video-call"/>
            </div>
            <div className="flex flex-col ml-12 gap-y-12 justify-center">
                <p className="text-dark-blue text-5xl tracking-wide font-medium">We are moving online!</p>
                <p className="text-gray-blue joiningText text-xl">
                    We can’t meet in person, but we still want to see you! In Fall 2020, we will conduct online
                    recruitment, and all club operations will be online. Please check out our timeline and
                    frequently asked questions by clicking below
                </p>
                <div className="mt-4 max-w-xs select-none bg-dark-blue text-white py-2 px-8 mr-32 hover:bg-header-orange ring-blue-500 duration-300 ring-offset-2 delay-150 ring-4 rounded-3xl shadow-lg text-center">Interested in Joining?</div>
            </div>
        </section>
        <Footer />
        </div>
    )
}

export default HomePage;