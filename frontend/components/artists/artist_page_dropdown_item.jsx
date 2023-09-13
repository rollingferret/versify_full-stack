import React from "react";

const ArtistPageDropdownItem = ({ item, handleAddToQueue }) => {
	const runAlbumAction = (e) => {
		if (e.target.innerText === "Add to queue") {
			handleAddToQueue(e);
		}
	};
	return (
		<button className="playlist-dropdown-button" onClick={runAlbumAction}>
			{item.title}
		</button>
	);
};

export default ArtistPageDropdownItem;
