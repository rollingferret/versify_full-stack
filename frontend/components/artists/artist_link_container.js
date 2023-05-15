import { connect } from "react-redux";
import { displayArtist,
} from "../../actions/artist_actions";
import ArtistLink from "./artist_link";

const mapDispatchtoProps = (dispatch) => ({
    displayArtist: (artistId) => dispatch(displayArtist(artistId)),
})

export default connect(null, mapDispatchtoProps)(ArtistLink);