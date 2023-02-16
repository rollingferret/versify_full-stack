import React from 'react';
import {MdKeyboardArrowDown,
    MdKeyboardArrowUp,
} from 'react-icons/md';

import MyLinks from './my_links';
import SearchBar from './searchbar';
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
            loggedOut, 
            logout,
            history,
        } = this.props;
        const { menuOpen,
        } = this.state;

        // Only show Links in NavBarSplash if on Splash page
        const navLinks = (<nav 
            className="nav-links">
                {history.location.pathname === '/' 
                ? <MyLinks /> 
                : null}
            </nav>
        )

        const logoutClick = () => logout().then ( () => history.push('/'));

        // When not on Splash page, show Links in user drop-down
        const dropMenu = (<div 
            className="menu-item">
                {history.location.pathname !== '/' 
                    ?  <>
                        <a href='https://github.com/imartinez921'>GitHub</a>
                        <a href='https://www.linkedin.com/in/irenemartinez921/'>LinkedIn</a>
                        </>
                        : null}
                <a onClick={logoutClick}>Log out</a>
            </div>
        )
        
        const arrowDisplay = menuOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />

        const loggedIn = (
            <nav className='nav-display' id='splash-logged-in'>
                <div id='avatar-pic-nav' onClick={this.showMenu}> 
                    <div id="avatar-pic"></div>
                    <div id="arrow-display">{arrowDisplay} </div>
                </div>
                {this.state.menuOpen ? (dropMenu) : (null)
                }
            </nav>
        )

        const navDisplay = currentUser ? loggedIn : loggedOut;
        
        return (
            <nav className="nav-container-splash">
                <div id="site-logo">
                    <Logo history={history}/>
                </div>
                <div className='search-container'>
                    {history.location.pathname !== '/' 
                    ? <SearchBar history={history} />
                    : null}
                </div>
                {navLinks}
                {navDisplay}
            </nav>
        )
    }
}

export default NavBarSplash;