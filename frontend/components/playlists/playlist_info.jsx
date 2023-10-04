import React from "react";

const PlaylistInfo = ({ title, description, currentUser }) => {
	return (
		<>
			<div className="playlist-header-text">
				<div id="type">
					<h2>PLAYLIST</h2>
				</div>
				<div id="title">{title}</div>
				<div id="description">
					<h3>{description}</h3>
				</div>
				<div id="username">
					<h2>{currentUser.username}</h2>
				</div>
			</div>
		</>
	);
};

export default PlaylistInfo;
