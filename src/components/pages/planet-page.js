import React, { Component } from 'react';

import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';

export default class PlanetPage extends Component{
    constructor(){
        super();
        this.state = {
            selectedItem: null
        };
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };
    render(){
        const { selectedItem } = this.state;
        const planetList = (
            <PlanetList
                onItemSelected={this.onItemSelected}
            />
        );
        const planetDetails = (
            <PlanetDetails itemId={selectedItem}/>
        );
        return(
            <Row left={planetList} right={planetDetails}/>
        );
    }
}