import React from 'react';

import ItemList from "../item-list";
import { withData, withSwapiService, withChildFunction } from '../hoc-helper';

const renderNameAndGender = ({name, gender}) => `${name} (${gender})`;
const renderNameAndModel = ({name, model}) => `${name} (${model})`;
const renderNameAndDiameter = ({name, diameter}) => `${name} (${diameter})`;

const mapPersonMethodsToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllPeople
    }
};
const mapPlanetMethodsToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllPlanets
    }
};
const mapStarshipMethodsToProps = (swapiService) =>{
    return {
        getData: swapiService.getAllStarShips
    }
};

const PersonList =  withSwapiService(
                        withData(
                            withChildFunction(
                                ItemList, renderNameAndGender
                            )
                        ),
                        mapPersonMethodsToProps
                    );
const PlanetList =  withSwapiService(
                        withData(
                            withChildFunction(
                                ItemList, renderNameAndDiameter
                            )
                        ),
                        mapPlanetMethodsToProps

                    );
const StarshipList = withSwapiService(
                        withData(
                            withChildFunction(
                                ItemList, renderNameAndModel
                            )
                        ),
                        mapStarshipMethodsToProps
                     );

export {
    PersonList,
    PlanetList,
    StarshipList
};