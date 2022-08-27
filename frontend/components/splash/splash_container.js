import {connect} from 'react-redux';

import Splash from './splash';

const mapStateToProps = ( {session, entities: { users } }) => ({
    currentUser: users[session.id]
});

export default connect(mapStateToProps, null)(Splash);
