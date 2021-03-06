import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper';

const StarshipDetails = (props) => {
    return(
        <ItemDetails {...props}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
        </ItemDetails>
    );
};
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarShip,
        getImageUrl: swapiService.getStarshipImage
    };
};
export default withSwapiService(StarshipDetails, mapMethodsToProps);