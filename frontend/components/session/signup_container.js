import { connect } from "react-redux";
import { createUser } from '../../actions/session_actions.js';
import SignupForm from "./signup_form";


const mapDispatchToProps = (dispatch) => ({
    createUser: formUser => dispatch( createUser(formUser) ),
    receiveSessionErrors: err => dispatch( receiveSessionErrors(err) ),
})

export default connect(null, mapDispatchToProps)(SignupForm)