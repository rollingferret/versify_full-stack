import {connect} from 'react-redux';

import { endSession } from '../../actions/session_actions';
import NavBarSplash from './nav_bar_splash';

const mapStateToProps = ( {session, entities: { users } }) => ({
  currentUser: users[session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(endSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSplash);
