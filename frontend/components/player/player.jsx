import React, { useEffect, useRef, useState } from "react";
import NowPlayingInfo from "./now_playing_info";
import PlayingControls from "./playing_controls";

const Player = ({
	params,
	path,
	history,
	tracks,
	isPlaying,
	reduxPlay,
}) => {
	// Set local states
	const [trackIndex, setTrackIndex] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0);

	// Set current track
	let currentTrack = tracks[trackIndex];
	let audioRef = currentTrack
		? useRef(new Audio(currentTrack.audioUrl)) // creates a new HTMLAudioElement
		: useRef(new Audio());

	// Set up play/pause behavior;
	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	// Set up behavior when changing tracks
	const isReady = useRef(false); // Avoids auto-play
	useEffect(() => {
		audioRef.current.pause();
		audioRef.current.source = currentTrack
			? new Audio(currentTrack.audioUrl) // creates a new HTMLAudioElement
			: new Audio();
		setTrackProgress(audioRef.current.currentTime);

		if (isReady.current) {
			audioRef.current.play();
			reduxPlay();
		} else {
			// Set the isReady ref as true for the next render
			isReady.current = true;
		}
	}, [trackIndex]);

	// Create PlayingControls functions
	const toPrevTrack = () => {
		if (trackIndex - 1 < 0) {
			setTrackIndex(tracks.length - 1);
		} else {
			setTrackIndex(trackIndex - 1);
		}
	};
	const toNextTrack = () => {
		if (trackIndex < tracks.length - 1) {
			setTrackIndex(trackIndex + 1);
		} else {
			setTrackIndex(0);
		}
	};
	const shufflePlay = () => {
		if (tracks.length > 1) {
			setTrackIndex(Math.floor(Math.random() * tracks.length));
		}
	};

	return (
		<div className="player-container">
			<NowPlayingInfo track={tracks[trackIndex]} />
			<PlayingControls
				trackProgress={trackProgress}
				togglePlay={reduxPlay}
				toPrevTrack={toPrevTrack}
				toNextTrack={toNextTrack}
				shufflePlay={shufflePlay}
			/>
			<div className="player-right"></div>
		</div>
	);
};

export default Player;
