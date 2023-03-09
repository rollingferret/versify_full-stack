import React from 'react';
import { Link } from 'react-router-dom';
import {MdKeyboardArrowDown,
    MdKeyboardArrowUp,
} from 'react-icons/md';

import MyLinks from './my_links';
import Logo from '../logo';

class NavBarSplash extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            currentUser: this.props.currentUser, // denotes Logged Out status
            menuOpen: false,
        }

        this.showMenu = this.showMenu.bind(this)
    }

 

    showMenu (e) {
        e.preventDefault();
        this.setState({ menuOpen: !this.state.menuOpen });
    }
    
    render () {
        const { currentUser,
            logout,
            history,
        } = this.props;
        const { menuOpen,
        } = this.state;

        const logoutClick = () => logout().then ( () => history.push('/'));

        const dropMenu = (<div 
            className="menu-item-splash">
                <a onClick={logoutClick}>Log out</a>
            </div>
        )
        
        const arrowDisplay = menuOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />

        const loggedOut = (
            <div className="logged-out-links">
              <div className="line"></div>
              <nav className='nav-display' id='splash-logged-out'>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
              </nav>
            </div>
        )

        const loggedIn = (
            <nav className='nav-display' id='splash-logged-in'>
                <div id='avatar-pic-nav-splash' onClick={this.showMenu}> 
                    <div id="avatar-pic"></div>
                    <div id="arrow-display"> {currentUser !== undefined ? currentUser.username : null} {arrowDisplay} </div>
                </div>
                {this.state.menuOpen ? (dropMenu) : (null)
                }
            </nav>
        )

        const navDisplay = (currentUser !== undefined ? loggedIn : loggedOut);
        
        return (
            <nav className="nav-container-splash">
                <div className="site-logo-splash">
                    <Logo history={history}/>
                </div>
                <MyLinks />
                {navDisplay}
            </nav>
        )
    }
}

export default NavBarSplash;