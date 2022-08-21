import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { endSession } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ( {session, entities: { users } }, ownProps) => ({
  currentUser: users[session.id],
  loggedOut: (
    <nav className='splash-logged-out'>
      I'M LOGGED OUT.
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </nav>
  ),
  loggedIn: (
    <nav className='splash-logged-in'>
      I'M LOGGED IN.
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </nav>
  ),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(endSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
