import React from "react";
import { Link } from 'react-router-dom';

import NavBarContainer from "../components/nav_bar/nav_bar_container";

const Splash = (props) => {
    const { currentUser } = props;

    const header = (    
        <header>
            <div>
                <h1>Versify</h1>
                <NavBarContainer />
            </div>
        </header> 
    )

    const loggedOutDisplay = (
        <h1>Music is everything.</h1>
    )

    let loggedInDisplay;
    if (currentUser) {
        const username = currentUser.username
        const name = username.charAt(0).toUpperCase() + username.slice(1)
        loggedInDisplay = (
            <div className='logged-in'>
                <h3>Welcome back, {name}.</h3>
                <Link className="btn" to="/user/playlists">Keep listening.</Link>
            </div>
        )
    }

    return (
    <>
        <header>
            <div>
                <h1>Versify</h1>
                <NavBarContainer />
            </div>
        </header>
        {currentUser ? loggedInDisplay : loggedOutDisplay}
    </>
    )
}

export default Splash;

