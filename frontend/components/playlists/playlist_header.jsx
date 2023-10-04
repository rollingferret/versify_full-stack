import React from "react";
import PlaylistInfo from "./playlist_info";

const PlaylistHeader = ({ children  }) => {
	return (
		<div className="playlist-header">
            {children}
		</div>
	);
};

export default PlaylistHeader;
