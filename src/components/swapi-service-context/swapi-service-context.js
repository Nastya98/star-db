import React from 'react';

const { Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer } =  React.create
/*
SwapiServiceConsumer принимает в качестве тела функцию -

    <SwapiServiceConsumer>
        {
            ()=> {
                return(
                  <span></span>
                );
            }
        }
    </SwapiServiceConsumer>
*/
export {
    SwapiServiceProvider,
    SwapiServiceConsumer
}