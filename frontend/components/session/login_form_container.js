import { connect } from "react-redux";
import React from 'react';
import { Link,
    } from 'react-router-dom';
    
import {createSession,
    createUser,
    logSessionErrors,
    } from '../../actions/session_actions';
import SessionForm from "./session_form";

const mapStateToProps = ( {errors}) => ({
    errors: errors.session, 
    formType: 'login',
    navLink: {
        text: "Don't have an account? Sign up as a new user instead.",
        link: "/signup",
    },
})

const mapDispatchToProps = (dispatch) => ({
    createUser: formUser => dispatch( createUser(formUser) ),
    createSession: formUser => dispatch( createSession(formUser) ),
    resetSessionErrors: () => dispatch(logSessionErrors)
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)