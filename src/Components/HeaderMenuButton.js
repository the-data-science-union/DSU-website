import React from 'react';
import propTypes from 'prop-types';

function HeaderMenuButton({buttonTitle}){
    return(
        <div className="flex flex-row place-items-center mt-12 rounded-lg shadow-lg shadow-dark-blue-500/50 bg-header-orange hover:bg-header-hover-orange px-8 leading-5 text-lg text-white font-semibold">{'<'}{buttonTitle}{'>'}</div>
    )
}

HeaderMenuButton.propTypes={
    buttonTitle:propTypes.string
}

HeaderMenuButton.defaultProps={
    buttonTitle:''
}

export default HeaderMenuButton;