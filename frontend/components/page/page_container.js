import { connect } from "react-redux";

import Page from "./page";

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.entities.users[state.session.id],
	errors: state.entities.errors,
	// matchObj is a prop passed down by AuthRoute. matchObj = {params, path, url} as keys
	params: ownProps.match.params,
	path: ownProps.match.path,
	history: ownProps.history,
	tracks: state.entities.nowPlaying.queue,
});

const mapDispatchToProps = (dispatch) => ({
	clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
