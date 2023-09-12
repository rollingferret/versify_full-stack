import { connect } from "react-redux";
import { toQueueAlbum } from "../../actions/now_playing_actions";

import ArtistPageDropdown from "./artist_page_dropdown";

const mapStateToProps = (state, ownProps) => {
	return {
		playlists: state.entities.playlists,
		allSongs: state.entities.songs.allSongs,
		currentArtist: ownProps.currentArtist,
		history: ownProps.history,
		artistPageDropdownState: ownProps.artistPageDropdownState,
		artistShowRef: ownProps.artistShowRef,
		ref: ownProps.ref,
		toggleArtistPageDropdown: ownProps.toggleArtistPageDropdown,
		items: [
			// TODO: Implement adding artist songs to playlist
			// {title: "Add to playlist",
			// submenu: [
			// 	[
			// 		{
			// 			title: "Create new playlist",
			// 		},
			// 		...playlists,
			// 		// Enclose array of playlists in an array since
			// 		// dropdown uses recursive .map function on items prop
			// 	],
			// ],
			// },
			{
				title: "Add to queue",
				id: `${crypto.randomUUID()}`,
				// No access to any other unique props in ArtistPageDropdown items.map
			},
		],
	};
};

const mapDispatchToProps = (dispatch) => ({
	toQueueAlbum: (songsArray) => dispatch(toQueueAlbum(songsArray)),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(ArtistPageDropdown);