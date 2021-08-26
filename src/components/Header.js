import React from  'react';
import './Header.css'

export default () => {
    return(
        <header>
            <div className="header--logo">
        <a href= "/">
            <img src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30' alt="Netflix" />
        </a>
            </div>
            <div className="headerUser">
                <a href= "/">
                    <img src="https://i.pinimg.com/236x/21/e1/09/21e109cb8cc83a54012113e656542813.jpg" />
                </a>
            </div>
        </header>
    );
}