import { connect } from "react-redux";
import Player from "./player";

import { reduxPlay } from "../../actions/now_playing_actions";

const mapStateToProps = (state, ownProps) => {
	return {
		currentUser: state.entities.users[state.session.id],
		errors: state.entities.errors,
		// matchObj is a prop passed down by AuthRoute
		// matchObj = {params, path, url} as keys
		params: ownProps.params,
		path: ownProps.path,
		history: ownProps.history,
		tracks: state.entities.nowPlaying.queue,
		isPlaying: state.entities.nowPlaying.isPlaying,
	};
};

const mapDispatchToProps = (dispatch) => ({
	clearPlaylistErrors: () => dispatch(clearPlaylistErrors()),
	reduxPlay: () => dispatch(reduxPlay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);