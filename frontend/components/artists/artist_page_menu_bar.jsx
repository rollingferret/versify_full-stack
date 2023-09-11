import React, { useEffect, useState } from "react";
import ArtistPageDropdown from "./artist_page_dropdown";

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

	const artistPageDropdownItems = [
		{
			title: "Add to playlist",
			submenu: [
				[
					{
						title: "Create new playlist",
					},
					...playlists,
					// Enclose array of playlists in an array since
					// dropdown uses recursive .map function on items prop
				],
			],
		},
	];

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
					artistPageDropdownItems={artistPageDropdownItems}
					toggleArtistPageDropdown={toggleArtistPageDropdown}
				/>
			)}
		</>
	);
};

export default ArtistPageMenuBar;
