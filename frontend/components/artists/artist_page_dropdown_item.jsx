import React from "react";

const ArtistPageDropdownItem = ({ item, allSongs, toQueueAlbum }) => {
	const runAlbumAction = (e) => {
		if (e.target.innerText === "Add to queue") {
            toQueueAlbum(allSongs);
		}
	};
	return <button 
        className="playlist-dropdown-button"
        onClick={runAlbumAction}>{item.title}</button>;
};

export default ArtistPageDropdownItem;
