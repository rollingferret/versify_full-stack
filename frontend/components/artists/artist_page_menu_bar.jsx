import React, { useEffect, useState } from "react";
import ArtistPageDropdown from "./artist_page_dropdown";

import { RxDotsHorizontal } from "react-icons/rx";
import { GrPlayFill } from "react-icons/gr";

const ArtistPageMenuBar = ({
	currentArtist,
	history,
	fetchPlaylists,
	editPlaylist,
	artistShowRef,
}) => {
	const [artistPageDropdownState, setArtistPageDropdownState] = useState({
		isOpen: false,
	});
	const toggleArtistPageDropdown = () => {
		setArtistPageDropdownState({ isOpen: !artistPageDropdownState.isOpen });
	};

	return (
		<>
			<div id="artist-play-button">
				<GrPlayFill />
				{/* TODO: Show pause button when Redux isPlaying=true */}
			</div>
			<div id="artist-dropdown-dots">
				<RxDotsHorizontal onClick={toggleArtistPageDropdown} />
			</div>
			{artistPageDropdownState.isOpen && (
				<ArtistPageDropdown
					currentArtist={currentArtist}
					history={history}
					fetchPlaylists={fetchPlaylists}
					editPlaylist={editPlaylist}
					artistPageDropdownState={artistPageDropdownState}
					artistShowRef={artistShowRef}
					toggleArtistPageDropdown={toggleArtistPageDropdown}
				/>
			)}
		</>
	);
};

export default ArtistPageMenuBar;
