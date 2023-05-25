import { connect } from "react-redux";
import TrackIndex from "./track_index.jsx";


const mapStateToProps = (state, OwnProps) => ({
    tracks: state.entities.songs,
})

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(mapStateToProps, null)(TrackIndex)