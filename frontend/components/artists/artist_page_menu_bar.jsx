import React, { useRef, useState, useEffect } from "react";
import ArtistPageDropdownContainer from "./artist_page_dropdown_container";

import { RxDotsHorizontal } from "react-icons/rx";
import {
	MdOutlinePlayCircleFilled,
	MdOutlinePauseCircleFilled,
} from "react-icons/md";

const ArtistPageMenuBar = ({
	artistShowRef,
	allSongs,
	isPlaying,
	queueSource,
	reduxPlay,
	toQueueArtist,
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

	// Prevent ArtistShow from scrolling when dropdown is open
	if (artistShowRef && artistShowRef.current) {
		if (artistPageDropdownState.isOpen) {
			artistShowRef.current.style.overflowY = "hidden";
		} else {
			artistShowRef.current.style.overflowY = "auto";
		}
	}

	const handleButtonClick = (e) => {
		e.preventDefault();
		toQueueArtist(allSongs);
		reduxPlay();
	};

	return (
		<>
			<div id="artist-play-button" onClick={handleButtonClick}>
				{isPlaying ? (
					<MdOutlinePauseCircleFilled />
				) : (
					<MdOutlinePlayCircleFilled />
				)}
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
