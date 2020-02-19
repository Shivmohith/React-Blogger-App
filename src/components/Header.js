import React from 'react';
import Navigation from './Navigation'

/* Name of the function should be in Pascal case - start with capital letter so that it doesn't conflict with the standard HTML elements' name */
/* Component */


const Header = () =>
    <div className="alert alert-light"> 
        <h1 className="text-center"> Blogger App </h1>
        {/* <h2> A simple blogging app in React! </h2> */}
        <h6 className="text-center"> A simple blogging app in React! </h6>
        <Navigation />
        <hr />

    </div>

export default Header;