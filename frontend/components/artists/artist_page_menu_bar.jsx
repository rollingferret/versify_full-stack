import React, { useRef, useState } from "react";
import ArtistPageDropdownContainer from "./artist_page_dropdown_container";

import { RxDotsHorizontal } from "react-icons/rx";
import { GrPlayFill } from "react-icons/gr";

const ArtistPageMenuBar = ({
	artistShowRef,
	history,
}) => {
	const [artistPageDropdownState, setArtistPageDropdownState] = useState({
		isOpen: false,
	});
	const toggleArtistPageDropdown = () => {
		setArtistPageDropdownState({ isOpen: !artistPageDropdownState.isOpen });
	};

	// Create dropdown ref in parent component in order to wrap Redux container
	const dropdownRef = useRef();

	if (artistShowRef && artistShowRef.current) {
		if (artistPageDropdownState.isOpen) {
			// Prevent ArtistShow from scrolling when dropdown is open
			artistShowRef.current.style.overflowY = "hidden";
		} else {
			artistShowRef.current.style.overflowY = "auto";
		}
	}

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
					history={history}
					artistPageDropdownState={artistPageDropdownState}
					artistShowRef={artistShowRef}
					ref={dropdownRef}
					toggleArtistPageDropdown={toggleArtistPageDropdown}
				/>
			)}
		</>
	);
};

export default ArtistPageMenuBar;
