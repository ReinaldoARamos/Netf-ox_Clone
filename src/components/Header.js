import React from  'react';
import './Header.css'

export default () => {
    return(
        <header id="head" className="black">
            <div className="header--logo">
        <a href= "/">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png' alt="Netflix" />
        </a>
            </div>
            <div className="header--User">
                <a href= "/">
                    <img src="https://i.pinimg.com/236x/21/e1/09/21e109cb8cc83a54012113e656542813.jpg" />
                </a>
            </div>
        </header>
    );
}