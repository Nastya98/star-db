import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export default class Header extends Component{
    render() {
        return (
            <header className="c-header d-flex align-items-center">
                <h2><Link to="/">Stat DB</Link></h2>
                <ul className="nav c-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/people/">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets/">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/starships/">Starships</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login/">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/secret/">Secret page</Link>
                    </li>
                </ul>
            </header>
        )
    }
}