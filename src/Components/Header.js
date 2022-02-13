import React from 'react';
import HeaderMenuButton from '../Components/HeaderMenuButton';
import facebookLogo from '../assets/facebookLogo.svg'; 
import instagramLogo from '../assets/instagramLogo.svg';
import Media from 'react-media';
import MobileHeader from './MobileHeader';
import DSULogo from '../assets/DSULogo.svg';
import {Link} from 'react-router-dom';

function Header(){
    return(
                    <Media queries={{
                        small: "(max-width: 767px)",
                        medium: "(min-width: 768px) and (max-width: 1023px)",
                        large: "(min-width: 1024px) and (max-width: 1229px)",
                        xlarge: "(min-width: 1230px) and (max-width: 1535px)",
                        xxlarge: "(min-width: 1536px)"}}>
                        {matches=>((matches.xlarge || matches.xxlarge) ?
                        <div className="flex-row flex bg-dark-blue py-5 select-none flex flex-row">
                        <Link to='/' className="ml-12 mr-48"><img src={DSULogo} alt="website-logo" width="220" height="70"/></Link>
                        <div className="flex flex-row gap-x-12">
                            <HeaderMenuButton buttonTitle="About Us" linkPage='AboutUs'/>
                            <HeaderMenuButton buttonTitle="The Team" linkPage='TheTeam'/>
                            <HeaderMenuButton buttonTitle="Projects" linkPage='Projects'/>
                            <HeaderMenuButton buttonTitle="Join Us" linkPage='JoinUs'/>
                            <div className="flex flex-row ml-24 mt-10">
                                <img src={facebookLogo} alt="facebook-icon" width="58" height="58" />
                                <img src={instagramLogo} alt="instagram-icon" width="45" height="45"/>
                            </div>
                        </div>
                        </div>
                        :
                        <MobileHeader />)}
                    </Media>
    )
}

export default Header;