import { connect } from "react-redux";
import { displayPlaylist,
    editPlaylist,
    removePlaylist,
} from "../../actions/playlists_actions";

import currentItem from "./current_view";

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: ownProps.currentUser,
        params: ownProps.params, // matchObj = {params, path, url} as keys
        path: ownProps.path,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        displayPlaylist: () => dispatch(displayPlaylist()),
        editPlaylist: () => dispatch(editPlaylist()),
        removePlaylist: () => dispatch(removePlaylist()),
    })
}

export default connect (mapStateToProps, mapDispatchToProps)(currentItem);