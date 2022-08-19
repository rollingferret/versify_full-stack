import { connect } from "react-redux";
import React from 'react';
import { Link,
    } from 'react-router-dom';

import { createUser,
    createSession,
    } from '../../actions/session_actions';
import SessionForm from "./session_form";

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Already have an account? Log in instead.</Link>
})

const mapDispatchToProps = (dispatch) => ({
    createUser: formUser => dispatch( createUser(formUser) ),
    createSession: formUser => dispatch( createSession(formUser) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)

