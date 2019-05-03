import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
        return(
            <div>
                <h1>This is secret page</h1>
            </div>
        );
    }
    return <Redirect to="/login"/>
};
export default SecretPage;