import React from 'react';
import instagramFooter from '../assets/InstagramFooterLogo.svg';
import LinkedInFooter from '../assets/LinkedInFooterLogo.svg';
import FacebookFooter from '../assets/FacebookFooterLogo.svg';

function Footer(){
    return(
        <footer className=" select-none bg-footer-blue py-16 flex flex-col gap-y-8">
            <div className="flex flex-row text-white gap-x-12 ml-12 text-lg">
                <p className="hover:text-header-orange">Home</p>
                <p className="hover:text-header-orange">About Us</p>
                <p className="hover:text-header-orange">The Team</p>
                <p className="hover:text-header-orange">Projects</p>
                <p className="hover:text-header-orange">Applications</p>
            </div>
            <div className="flex flex-row text-white ml-12 mr-24">
                <div className="flex flex-col grow">
                    <p className="text-xl lg:text-3xl">{'>'} Contact_Us</p>
                    <p className="text-lg lg:text-xl">[1] email: (ucladsu@gmail.com)</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-x-4 mb-8">
                        <img src={instagramFooter} alt="instagram link" />
                        <img src={LinkedInFooter} alt="linkedin link" />
                        <img src={FacebookFooter} alt="facebook link" />
                    </div>
                    <p className="text-center tracking-wide font-thin text-md lg:text-lg">© Copyright 2022</p>
                    <p className="text-center tracking-wide font-thin text-md lg:text-lg">{'<'}All rights reserved{'>'}</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;