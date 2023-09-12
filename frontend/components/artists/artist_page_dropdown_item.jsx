import React from "react";

const ArtistPageDropdownItem = ({ item, allSongs, toQueueArtist }) => {
	const runAlbumAction = (e) => {
		if (e.target.innerText === "Add to queue") {
            toQueueArtist(allSongs);
		}
	};
	return <button 
        className="playlist-dropdown-button"
        onClick={runAlbumAction}>{item.title}</button>;
};

export default ArtistPageDropdownItem;
