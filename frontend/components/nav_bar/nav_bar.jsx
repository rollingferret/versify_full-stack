import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    const { currentUser, logout } = props;

    const loggedOutDisplay = (
        <nav className='logged-out'>
            <h1>Music is everything.</h1>
            <Link className="btn" to="/signup">Sign Up</Link>
            <p /><Link className="btn" to="/login">Log In</Link>
        </nav>
    );

    let loggedInDisplay;
    if (currentUser) {
        loggedInDisplay = (
            <div className='logged-in'>
                <h3>Welcome back, {currentUser.username}. Keep listening.</h3>
                <button onClick={logout}>Logout</button>
                {/* button needs to be nested in drop down under username */}
            </div>
        )
    }

    return (currentUser ? loggedInDisplay : loggedOutDisplay)
}

export default NavBar;