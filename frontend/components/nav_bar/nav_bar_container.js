import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { endSession } from '../../actions/session_actions';
import NavBarSplash from './nav_bar_splash';

const mapStateToProps = ( {session, entities: { users } }) => ({
  currentUser: users[session.id],
  loggedOut: (
    <>
      <div className="line"></div>
      <nav className='nav-display' id='splash-logged-out'>
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log In</Link>
      </nav>
    </>
  ),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(endSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSplash);
