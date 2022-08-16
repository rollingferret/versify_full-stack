import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav_bar';
import { endSession } from '../../actions/session';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(endSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);