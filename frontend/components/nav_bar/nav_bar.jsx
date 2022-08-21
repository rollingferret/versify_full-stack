import React from 'react';
import MyLinks from './my_links';


class NavBar extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            currentUser: this.props.currentUser, // denotes Logged Out status
        }
    }
    
    render () {
        console.log(this.props)
        const { currentUser,
            loggedOut,
            loggedIn, 
            logout,
            history,
        } = this.props;

        const logoDiv = (
            <div className="site-logo">
                LOGO PLACEHOLDER
            </div>
        )

        const logoutClick = () => logout()
            .then ( () => history.push('/'));

        const navDisplay = currentUser ? loggedIn : loggedOut;
        
        return (
            <nav className="nav-container">
                {logoDiv}
                {/* <nav className="nav-links">
                    <MyLinks />
                    {navDisplay}
                </nav> */}
            </nav>
        )
    }
}

export default NavBar;