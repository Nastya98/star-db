import React from 'react';

import './error-indicator.css';

import icon from './death-star.svg';

const ErrorIndicator = () => {
    return (
        <div className="alert alert-danger d-flex flex-column align-items-center">
            <img src={icon} alt=""/>
            <span>
                <strong>BOOM!</strong> Something went wrong.
            </span>
        </div>
    );
};

export default ErrorIndicator;