import React, { useEffect, useRef } from "react";

import ArtistPageDropdownItem from "./artist_page_dropdown_item";
import SongCardSubmenu from "../songs/song_card_submenu";

const ArtistPageDropdown = ({
	currentArtist,
	history,
	artistPageDropdownState,
	artistShowRef,
	toggleArtistPageDropdown,
	playlists,
	allSongs,
	items,
	fetchPlaylists,
}) => {
	useEffect(() => {
		const whenMenuIsOpen = (event) => {
			if (
				artistPageDropdownState.isOpen &&
				artistShowRef?.current &&
				!artistShowRef?.current?.contains(event.target)
			) {
				toggleArtistPageDropdown();
			}
		};
		document.addEventListener("mousedown", whenMenuIsOpen);
		document.addEventListener("touchstart", whenMenuIsOpen);
		return () => {
			// Cleanup the event listener when component unmounts
			document.removeEventListener("mousedown", whenMenuIsOpen);
			document.removeEventListener("touchstart", whenMenuIsOpen);
		};
	}, [artistPageDropdownState]);

	if (artistShowRef && artistShowRef.current) {
		if (artistPageDropdownState.isOpen) {
			// Prevent ArtistShow from scrolling when dropdown is open
			artistShowRef.current.style.overflowY = "hidden";
		} else {
			artistShowRef.current.style.overflowY = "auto";
		}
	}

	const keepDropdownOpen = (event) => {
		event.stopPropagation();
		// prevents re-rendering of parent and keeps menu open

		switch (
			event.target.innerText // TODO: Fill out dropdown actions
		) {
			default:
				null;
		}
	};

	return (
		<>
			<div className="dropdown-item artist-dropdown">
				{items.map((item, index) =>
					item.submenu ? (
						{/* TODO: Implement submenu logic */}
					) : (
						<ArtistPageDropdownItem item={item} />
					)
				)}
			</div>
		</>
	);
};

export default ArtistPageDropdown;
