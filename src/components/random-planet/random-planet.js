import React, { Component } from 'react';
import PropsTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';
import Spinner from "../spinner/spinner";
import Error from "../error-indicator";

export default class RandomPlanet extends Component {
    
    static defaultProps = {
        updateInterval: 5000
    };
    static propTypes = {
        updateInterval: PropsTypes.number
    };

    swapiService = new SwapiService();

    constructor(){
        super();
        this.state = {
            planet: {},
            loading: true,
            error: false
        };
    }

    componentDidMount(){
        const { updateInterval } = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 10) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <Error/> : null;
        const content = !loading && !errorMessage ? <PlanetView planet={ planet }/> : null;

        return (
            <React.Fragment>
            <div className="c-random-planet jumbotron rounded d-flex align-items-start">
                { errorMessage }
                { spinner }
                { content }
            </div>
            </React.Fragment>
        )
    }

}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return(
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
            <div className="u-margin-left">
                <h3>{ name }</h3>
                <ul className="c-list list-group list-group-flush">
                    <li className="c-list__item list-group-item">
                        <span className="term">Population</span>
                        <span>{ population }</span>
                    </li>
                    <li className="c-list__item list-group-item">
                        <span className="term">Rotation period</span>
                        <span>{ rotationPeriod }</span>
                    </li>
                    <li className="c-list__item list-group-item">
                        <span className="term">Diameter</span>
                        <span>{ diameter }</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};