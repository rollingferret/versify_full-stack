import React from "react";

const NowPlayingInfo = ({
	track = {
		title: "",
		albumId: "",
		audioUrl: "",
		albumImageUrl: "",
		songArtist: "",
	},
	...restProps
}) => {
	const { title, albumId, audioUrl, albumImageUrl, songArtist } = track;
	return (
		<div className="now-playing">
			<div
				className="now-playing-art"
				alt={`track artwork for ${title} by ${songArtist.name}`}
			>
				<img src={albumImageUrl} />
			</div>
			<div className="now-playing-info">
				<div className="now-playing-title">{title}</div>
				<div className="now-playing-artist">{songArtist.name}</div>
			</div>
			<div className="now-playing-buttons"></div>
		</div>
	);
};

export default NowPlayingInfo;
