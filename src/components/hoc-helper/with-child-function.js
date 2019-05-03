import React from 'react';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props} renderItem={fn}/>
        );
    }
};
export default withChildFunction;