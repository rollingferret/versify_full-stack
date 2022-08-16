import {connect} from 'react-redux';
import NavBar from './nav_bar';
import { endSession } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(endSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);