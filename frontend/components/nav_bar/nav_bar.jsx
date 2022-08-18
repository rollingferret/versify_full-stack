import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    const { currentUser, logout } = props;

    const loggedOutDisplay = (
        <nav className='logged-out'>
            <Link className="btn" to="/signup">Sign Up</Link>
            <p /><Link className="btn" to="/login">Log In</Link>
        </nav>
    );

    let loggedInDisplay;
    if (currentUser) {
            <button onClick={logout}>Logout</button>
            {/* button needs to be nested in drop down under username */}
    }

    return (currentUser ? loggedInDisplay : loggedOutDisplay)
}

export default NavBar;