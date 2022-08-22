import React from 'react';
import {MdKeyboardArrowDown,
    MdKeyboardArrowUp,
} from 'react-icons/md'

import MyLinks from './my_links';

class NavBar extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            currentUser: this.props.currentUser, // denotes Logged Out status
            hovered: false,
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleMouseEnter () {
        this.setState({ hovered: true });
    }
    
    handleMouseLeave () {
        this.setState({ hovered: false });
    }
    
    render () {
        const { currentUser,
            loggedOut, 
            logout,
            history,
        } = this.props;
        const { hovered,
        } = this.state;
        console.log(history)

        const logoDiv = (
            <div className="site-logo">
                FAVICON
            </div>
        )
        
        const logoutClick = () => logout().then ( () => history.push('/'));

        const logoutHere = (<div 
            className="menu-item" 
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            <a onClick={logoutClick}>Log out</a>
            </div>
        )
        
        const arrowDisplay = hovered ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />

        const loggedIn = (
            <nav className='nav-display' id='splash-logged-in'>
                <div className='avatar-pic-nav'
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    >
                    <div id='avatar-arrow'
                    > PIC {arrowDisplay} </div>
                </div>
                {this.state.hovered ? (logoutHere) : (null)
                }
            </nav>
        )


        const navDisplay = currentUser ? loggedIn : loggedOut;
        
        return (
            <nav className="nav-container">
                {logoDiv}
                <nav className="nav-links">
                    {history.location.pathname === '/' 
                        ? <MyLinks /> 
                        : null}
                    {navDisplay}
                </nav>
            </nav>
        )
    }
}

export default NavBar;