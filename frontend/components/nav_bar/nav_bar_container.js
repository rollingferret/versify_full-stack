import {connect} from 'react-redux';

import { endSession } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ( {session, entities: { users } }, ownProps) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(endSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
