import { connect } from "react-redux";
import { createUser,
    logSessionErrors, 
    createSession,
} from '../../actions/session_actions';
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup',
})

const mapDispatchToProps = (dispatch) => ({
    createUser: formUser => dispatch( createUser(formUser) ),
    createSession: formUser => dispatch( createSession(formUser) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)