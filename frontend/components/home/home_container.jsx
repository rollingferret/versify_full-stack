import { connect } from "react-redux";
    
// import {createSession,
//     createUser,
//     clearSessionErrors,
//     } from '../../actions/session_actions';
import Home from './home'

const mapStateToProps = ( {errors}) => ({
//     errors: errors.session, 
//     formType: 'login',
//     navLink: {
//         text: "Don't have an account? Sign up for Spotify.",
//         link: "/signup",
//     },
//     demoText: 'LOG IN AS DEMO USER',
//     greetingText: 'To continue, log in to Spotify.',
//     formText: 'Log in with your username.',
})

const mapDispatchToProps = (dispatch) => ({
//     createUser: formUser => dispatch( createUser(formUser) ),
//     createSession: formUser => dispatch( createSession(formUser) ),
//     clearSessionErrors: () => dispatch(clearSessionErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)