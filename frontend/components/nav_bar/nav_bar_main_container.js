import {connect} from 'react-redux';

import { endSession } from '../../actions/session_actions';
import NavBarMain from './nav_bar_main';

const mapStateToProps = ( {session, entities: { users } }) => ({
  currentUser: users[session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(endSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarMain);
