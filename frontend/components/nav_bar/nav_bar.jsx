import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor (props) {
        super(props)
    }
    
    render () {
        const { currentUser, logout } = this.props;
        
        const loggedOutDisplay = (
            <nav className='logged-out'>
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </nav>
    );
    
    let loggedInDisplay;
    if (currentUser) {
        return loggedInDisplay = (
            <button onClick={logout}>Logout</button>
            // {/* button needs to be nested in drop down under username */}
            )
        }
        
        return (currentUser ? loggedInDisplay : loggedOutDisplay)
    }
}

export default NavBar;