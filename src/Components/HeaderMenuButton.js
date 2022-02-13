import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

function HeaderMenuButton({buttonTitle, linkPage}){
    return(
        !linkPage ?
        <div className="flex flex-row place-items-center mt-12 rounded-lg shadow-lg shadow-dark-blue-500/50 bg-header-orange hover:bg-header-hover-orange px-8 leading-5 text-lg text-white font-semibold">{'<'}{buttonTitle}{'>'}</div>
        :
        <Link to={`/${linkPage}`}className="flex flex-row place-items-center mt-12 rounded-lg shadow-lg shadow-dark-blue-500/50 bg-header-orange hover:bg-header-hover-orange px-8 leading-5 text-lg text-white font-semibold">{'<'}{buttonTitle}{'>'}</Link>
    )
}

HeaderMenuButton.propTypes={
    buttonTitle:propTypes.string,
    linkPage:propTypes.string
}

HeaderMenuButton.defaultProps={
    buttonTitle:'',
    linkPage:''
}

export default HeaderMenuButton;