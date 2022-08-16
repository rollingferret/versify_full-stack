import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
        <h3>{currentUser.username}</h3>
        <button onClick={logout}>Logout</button>
        {/* button needs to be nested in drop down under username */}
        </div>
    ) : (
        <div>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log In</Link>
        </div>
    );
    return (
        <header className="nav-bar">
        <h1 className="logo">VERSIFY</h1>
        <div>
            {display}
        </div>
        </header>
    )
}

export default NavBar;