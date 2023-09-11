import React, { useEffect, useState } from "react";
import ArtistPageDropdownContainer from "./artist_page_dropdown_container";

import { RxDotsHorizontal } from "react-icons/rx";
import { GrPlayFill } from "react-icons/gr";

const ArtistPageMenuBar = ({
	currentArtist,
	fetchPlaylists,
	editPlaylist,
	artistShowRef,
	history,
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
				<ArtistPageDropdownContainer
					currentArtist={currentArtist}
					history={history}
					artistPageDropdownState={artistPageDropdownState}
					artistShowRef={artistShowRef}
					toggleArtistPageDropdown={toggleArtistPageDropdown}
				/>
			)}
		</>
	);
};

export default ArtistPageMenuBar;
