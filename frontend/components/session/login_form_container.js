import { connect } from "react-redux";
import React from 'react';
import { Link,
    } from 'react-router-dom';
    
import {createSession,
    } from '../../actions/session_actions';
import SessionForm from "./session_form";

const mapStateToProps = ( {errors}) => ({
    errors: errors.session, 
    formType: 'login',
    navLink: <Link to="/signup">Don't have an account? Sign up as a new user instead.</Link>,
})

const mapDispatchToProps = (dispatch) => ({
    createSession: formUser => dispatch( createSession(formUser) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)