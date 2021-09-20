import './style.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to="/">PexelIdentifier</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="under_line" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="under_line" exact to="/identify">Identify Image</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" activeClassName="under_line" href="#about">About Application</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" activeClassName="under_line" href="#features">Features</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
