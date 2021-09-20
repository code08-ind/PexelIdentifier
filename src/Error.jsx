import React from 'react';
import { NavLink } from 'react-router-dom';
import error from './images/error.svg';

document.title = '404, Page Not Found';

const Error = () => {
    return (
        <>
            <div className="container error">
                <img src={error} alt="404 Error. Page Not Found" />
                <h3>The Page You Were Looking For Was Not Found Or It Has Been Permanently Deleted</h3>
                <NavLink exact to="/" className="return_home">Return To Homepage</NavLink>
            </div>
        </>
    );
}

export default Error;
