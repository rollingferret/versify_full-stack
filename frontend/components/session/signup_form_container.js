import { connect } from "react-redux";

import { createUser,
    createSession,
    logSessionErrors,
    clearSessionErrors,
    } from '../../actions/session_actions';
import SessionForm from "./session_form";

const mapStateToProps = ( {errors} ) => ({
    errors: errors.session,
    formType: 'signup',
    navLink: {
        text: "Have an account? Log in.",
        link: "/login",
    },
    demoText: 'Sign up as Demo User',
    greetingText: 'Sign up for free to start listening.',
    formText: 'Sign up with your email address',
    footerText: "By clicking on sign-up, you agree that Versify is only a Spotify clone. Terms and Conditions and Spotify's privacy policy do not apply."
})

const mapDispatchToProps = (dispatch) => ({
    createUser: formUser => dispatch( createUser(formUser) ),
    createSession: formUser => dispatch( createSession(formUser) ),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    logSessionErrors: (err) => dispatch(logSessionErrors(err)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)

