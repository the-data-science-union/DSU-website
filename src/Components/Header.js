import React from 'react';
import DSULogo from '../assets/DSULogo.svg';
import HeaderMenuButton from '../Components/HeaderMenuButton';
import facebookLogo from '../assets/facebookLogo.svg'; 
import instagramLogo from '../assets/instagramLogo.svg';

function Header(){
    return(
        <div className="flex-row flex bg-dark-blue py-5 select-none">
        <div className="flex flex-row">
            <img src={DSULogo} alt="website-logo" width="220" height="70" className="ml-12 mr-48"/>
            <div className="flex flex-row gap-x-12">
            <HeaderMenuButton buttonTitle="About Us" />
            <HeaderMenuButton buttonTitle="The Team" />
            <HeaderMenuButton buttonTitle="Projects" />
            <HeaderMenuButton buttonTitle="Join Us" />
            </div>
            <div className="flex flex-row ml-24 mt-10">
                <img src={facebookLogo} alt="facebook-icon" width="58" height="58" />
                <img src={instagramLogo} alt="instagram-icon" width="45" height="45"/>
            </div>
        </div>
    </div>
    )
}

export default Header;