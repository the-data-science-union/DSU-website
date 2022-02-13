import React from 'react';
import HamburgerMenu from '../assets/HamburgerMenu.svg';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DSULogo from '../assets/DSULogo.svg';
import facebookLogoMobile from '../assets/facebookLogoMobile.svg'; 
import instagramLogoMobile from '../assets/instagramLogoMobile.svg';

function MobileHeader(){
     const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const options=['<Home>','<About Us>','<The Team>','<Projects>','<Join Us>'];
    return(
        <div className="flex flex-row">
            <div className="basis-1/2"><img src={DSULogo} alt="website-logo" width="220" height="70" className="md:ml-12"/></div>
            <div className="grow flex justify-end">
            <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            >
                <img src={HamburgerMenu} alt="hamburger-menu"/>
            </IconButton>
            <Menu
            id="long-menu"
            MenuListProps={{
                'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                maxHeight: 48 * 4.5,
                width: '20ch',
                },
            }}
            >
            {options.map((option) => (
                <MenuItem key={option} selected={option === 'About Us'} onClick={handleClose}>
                    {option}
                </MenuItem>
            ))}
            </Menu>
        </div>
        </div>
        
    )
}

export default MobileHeader;