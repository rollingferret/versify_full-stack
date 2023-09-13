import React from "react";

const ArtistPageDropdownItem = ({ item }) => {
	return <button className="playlist-dropdown-button">{item.title}</button>;
};

export default ArtistPageDropdownItem;
