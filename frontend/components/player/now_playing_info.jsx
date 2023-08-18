import React from "react";

const NowPlayingInfo = (track) => {
	const { title, albumId, audioUrl, albumImageUrl, songArtist } =
		track;
	return (
		<div className="now-playing-info">
			<div
				className="now-playing-art"
				alt={`track artwork for ${title} by ${songArtist}`}
			></div>
			<div className="now-playing-info">
				<div className="now-playing-title">{title}</div>
				<div className="now-playing-artist">{songArtist}</div>
			</div>
			<div className="now-playing-buttons"></div>
		</div>
	);
};

export default NowPlayingInfo;
