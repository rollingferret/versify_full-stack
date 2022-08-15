import { connect } from "react-redux";
import { createUser } from '../actions/session_actions';
import Signup from "./signup";


const mapDispatchToProps = (dispatch) => ({
    createUser: formUser => dispatch( createUser(formUser) ),
})

export default connect(null, mapDispatchToProps)(Signup)