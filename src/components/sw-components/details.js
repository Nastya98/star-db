import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from "../swapi-service-context";

const PersonDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                   return(
                       <ItemDetails
                           itemId={itemId}
                           getData={getPerson}
                           getImageUrl={getPersonImage}>

                           <Record field="gender" label="Gender"/>
                           <Record field="eyeColor" label="Eye color"/>

                       </ItemDetails>
                   );
                }
            }
        </SwapiServiceConsumer>
    );
};
const PlanetDetails = ({ itemId }) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                  return(
                      <ItemDetails
                          itemId={itemId}
                          getData={getPlanet}
                          getImageUrl={getPlanetImage}>

                          <Record field="population" label="Population"/>
                          <Record field="diameter" label="Diameter"/>

                      </ItemDetails>
                  );
                }
            }
        </SwapiServiceConsumer>
    );
};
const StarshipDetails = ({ itemId }) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getStarShip, getStarshipImage}) => {
                    return(
                        <ItemDetails
                            itemId={itemId}
                            getData={getStarShip}
                            getImageUrl={getStarshipImage}>

                            <Record field="model" label="Model"/>
                            <Record field="length" label="Length"/>

                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};