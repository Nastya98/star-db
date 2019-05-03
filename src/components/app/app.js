import React, { Component } from 'react';

import './app.css';
import Header from "../header/header";
import { PlanetPage, StarshipPage, PeoplePage, SecretPage, LoginPage } from '../pages';
import RandomPlanet from "../random-planet/random-planet";
import {StarshipDetails} from "../sw-components/details";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import Children from '../children';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component{

    swapiService = new SwapiService();

    constructor(){
        super();
        this.state = {
            isLoggedIn: false
        }
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    render() {
        const { isLoggedIn } = this.state;
        return (
            <SwapiServiceProvider value={this.swapiService}>
                <Router>
                    <div className='container'>
                        <Header/>
                        <RandomPlanet/>
                        <Children>
                            <div>Item 1</div>
                            <div>Item 2</div>
                        </Children>
                        <Switch>
                            <Route path="/"
                                   render={() => <h2>Welcome to StartDB</h2>}
                                   exact/>
                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetPage}/>
                            <Route path="/starships"
                                   component={StarshipPage}
                                   exact/>
                            <Route path="/starships/:id"
                                   render={({ match }) => {
                                       const { id } = match.params;
                                        return <StarshipDetails itemId={id}/>
                                    }
                                   }/>
                            <Route path="/login/"
                                   render={()=>(
                                       <LoginPage onLogin={this.onLogin} isLoggedIn={isLoggedIn}/>
                                   )}/>
                            <Route path="/secret"
                                   render={() => (
                                       <SecretPage isLoggedIn={isLoggedIn}/>
                                   )}/>
                            <Route render={() => <h1>404</h1>}/>
                        </Switch>
                    </div>
                </Router>
            </SwapiServiceProvider>
        )
    }
}