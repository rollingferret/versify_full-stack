import { connect } from "react-redux";
import { fetchArtists,
    displayArtist,
} from "../actions/artist_actions"

import ArtistIndex from "./artist_index";


const mapStateToProps = ( {entities: {artists}}, ownProps) => ({
    artists: artists,
    params: ownProps.params,
    history: ownProps.history,
    // artists: Object.values(artists),
})

const mapDispatchToProps = (dispatch) => ({
    fetchArtists: () => dispatch( fetchArtists() ),
    displayArtist: (artistId) => dispatch( displayArtist(artistId) ),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);