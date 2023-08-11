import React, { useEffect, useRef, useState } from "react";
import NowPlayingInfo from "./now_playing_info";
import PlayingControls from "./playing_controls";

const Player = ({ tracks }) => {
	const { title, albumId, audioUrl, albumImageUrl, songArtist } =
		tracks[trackIndex];

	// Set local states
	const { trackIndex, setTrackIndex } = useState(0);
	const { trackProgress, setTrackProgress } = useState(0);
	const { isPlaying, setIsPlaying } = useState(false);

	// Set refs
	const audioRef = useRef(new Audio(audioUrl));
	const intervalRef = useRef();
	const isReady = useRef(false);

	// Player functions
	const toPrevTrack = () => {
		console.log("TODO go to prev");
	};

	const toNextTrack = () => {
		console.log("TODO go to next");
	};

	return (
		<div className="player-container">
			<NowPlayingInfo />
			<PlayingControls isPlaying={isPlaying}/>
			<div className="player-right"></div>
		</div>
	);
};

export default Player;
