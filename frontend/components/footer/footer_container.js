import { Connect } from "react-redux";
import Footer from "./footer";

const mapStateToProps = (
    { session, entities: { users }, errors },
    ownProps
) => ({
    currentUser: users[session.id],
    errors: errors,
    // matchObj is a prop passed down by AuthRoute. matchObj = {params, path, url} as keys
    params: ownProps.match.params,
    path: ownProps.match.path,
    history: ownProps.history,
});

const mapDispatchToProps = (dispatch) => ({
    clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
