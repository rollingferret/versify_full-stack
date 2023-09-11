import { connect } from "react-redux";

import ArtistPageDropdown from "./artist_page_dropdown";

const mapStateToProps = (state, ownProps) => {
	return {
		currentArtist: ownProps.currentArtist,
		history: ownProps.history,
		artistPageDropdownState: ownProps.artistPageDropdownState,
		artistShowRef: ownProps.artistShowRef,
		ref: ownProps.ref,
		toggleArtistPageDropdown: ownProps.toggleArtistPageDropdown,
		playlists: state.entities.playlists,
		allSongs: state.entities.songs.allSongs,
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
	fetchPlaylists: () => dispatch(fetchPlaylists()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(ArtistPageDropdown);