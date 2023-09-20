import React, { useEffect } from "react";

const NowPlayingInfo = ({
	audioRef,
	track,
	trackProgress,
	isPlaying,
	hasQueue,
	updateTrackProgress,
}) => {
	if (!track) {
		track = {
			title: "",
			albumId: "",
			albumImageUrl: "",
			songArtist: "",
		};
	}
	const { title, albumId, albumImageUrl, songArtist } = track;
	useEffect(() => {
		updateTrackProgress(audioRef.current.currentTime);
	}, [isPlaying]);
	return (
		<div className="now-playing">
			{trackProgress > 0 || (hasQueue && trackProgress === 0) ? (
				<>
					<div
						className="now-playing-art"
						alt={`track artwork for ${title} by ${songArtist.name}`}
					>
						{albumImageUrl && <img src={albumImageUrl} />}
					</div>
					<div className="now-playing-info">
						<div className="now-playing-title">{title}</div>
						<div className="now-playing-artist">
							{songArtist.name}
						</div>
					</div>
					<div className="now-playing-buttons"></div>
				</>
			) : null}
		</div>
	);
};

export default NowPlayingInfo;
