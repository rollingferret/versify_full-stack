import React, { useEffect } from "react";

const ArtistPageDropdown = ({
	currentArtist,
	fetchPlaylists,
	editPlaylist,
	destroyPlaylist,
	history,
}) => {

	const keepDropdownOpen = (event) => {
		event.stopPropagation();
		// prevents re-rendering of parent and keeps menu open

		switch (event.target.innerText) { // TODO: Fill out dropdown actions
			default:
				null;
		}
	};

	return (
		<>
			<div className="dropdown-item artist-dropdown">
				<button className="playlist-dropdown-button">
					Sample option
				</button>
			</div>
		</>
	);
};

export default ArtistPageDropdown;
