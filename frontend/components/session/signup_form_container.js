import { connect } from "react-redux";
import React from 'react';
import { Link,
    } from 'react-router-dom';

import { createUser,
    createSession,
    logSessionErrors,
    } from '../../actions/session_actions';
import SessionForm from "./session_form";

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'signup',
    navLink: {
        text: "Already have an account? Log in instead.",
        link: "/login",
    },
})

const mapDispatchToProps = (dispatch) => ({
    createUser: formUser => dispatch( createUser(formUser) ),
    createSession: formUser => dispatch( createSession(formUser) ),
    resetSessionErrors: () => dispatch(logSessionErrors)

})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)

