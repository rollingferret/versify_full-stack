import React, { useEffect } from "react";
import ArtistPageDropdown from "./artist_page_dropdown";

import { RxDotsHorizontal } from "react-icons/rx";
import { GrPlayFill } from "react-icons/gr";

const ArtistPageMenuBar = ({
	currentArtist,
	history,
	fetchPlaylists,
	editPlaylist,
	artistPageDropdownState = { isOpen: true }, // local state placeholder
}) => {

	return (
		<>
			<div id="playlist-play-button">
				<GrPlayFill />
				{/* TODO: Show pause button when Redux isPlaying=true */}
			</div>
			<div id="playlist-dropdown-dots">
				<RxDotsHorizontal />
                {/* TODO: Add onClick to toggle dropdown local state */}
			</div>
			{artistPageDropdownState.isOpen && (
				<ArtistPageDropdown
					currentArtist={currentArtist}
					history={history}
					fetchPlaylists={fetchPlaylists}
					editPlaylist={editPlaylist}
					artistPageDropdownState={artistPageDropdownState}
				/>
			)}
		</>
	);
};

export default ArtistPageMenuBar;
