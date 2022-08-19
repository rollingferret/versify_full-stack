import React from "react";
import { Link } from "react-router-dom";


const SplashDisplay = (props) => {
    const { currentUser } = props;

    const loggedOutDisplay = (
        <div className="splash-message">
            <h1>Music is everything.</h1>
        </div>
    )

    let loggedInDisplay;
    if (currentUser) {
        const username = currentUser.username
        const name = username.charAt(0).toUpperCase() + username.slice(1)
        return loggedInDisplay = (
            <div className='logged-in'>
                <h3>Welcome back, {name}.</h3>
                <Link to="/user/playlists" className="btn">Keep listening.</Link>
            </div>
        )
    }

    return (currentUser ? loggedInDisplay : loggedOutDisplay)
}

export default SplashDisplay;