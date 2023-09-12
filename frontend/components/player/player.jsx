import React, { useEffect, useRef, useState } from "react";
import NowPlayingInfo from "./now_playing_info";
import PlayingControls from "./playing_controls";

const Player = ({ tracks, isPlaying, reduxPlay }) => {
	// Set local states
	const [trackIndex, setTrackIndex] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0); // progress bar
	const [isShuffling, setIsShuffling] = useState(false);
	const [afterFirstPlay, setAfterFirstPlay] = useState(false);

	const updateTrackProgress = (time) => {
		return setTrackProgress(time);
	};

	// Set current track
	let currentTrack = tracks ? tracks[trackIndex] : null;
	let audioRef = useRef(new Audio()); // creates empty HTMLAudioElement
	let audioSrc;

	useEffect(() => {
		audioSrc = currentTrack ? currentTrack.audioUrl : "";
		audioRef.current.src = audioSrc;
	}, [currentTrack]);

	// Set up play/pause behavior;
	useEffect(() => {
		if (isPlaying) {
			setAfterFirstPlay(true);
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	// Set up behavior when changing tracks
	const afterFirstRender = useRef(false); // prevent auto-play
	useEffect(() => {
		if (isPlaying && afterFirstRender.current) {
			audioRef.current.pause();
		}
		audioRef.current.src = audioSrc;
		setTrackProgress(audioRef.current.currentTime);
		if (isPlaying) {
			audioRef.current.play();
		}
		if (!afterFirstRender) afterFirstRender.current = true;
	}, [trackIndex]);

	// Create PlayingControls functions
	const toPrevTrack = () => {
		if (isPlaying) audioRef.current.pause();
		if (trackIndex - 1 < 0) {
			setTrackIndex(tracks.length - 1);
		} else {
			setTrackIndex(trackIndex - 1);
		}
	};
	const toNextTrack = () => {
		if (isPlaying) audioRef.current.pause();
		if (trackIndex < tracks.length - 1) {
			setTrackIndex(trackIndex + 1);
		} else {
			setTrackIndex(0);
		}
	};
	const toggleShuffle = () => {
		// TODO: Re-work this logic
		if (isShuffling) return setIsShuffling(false);
		if (tracks.length > 1) {
			setIsShuffling(true);
			setTrackIndex(Math.floor(Math.random() * tracks.length));
		}
	};

	return (
		<div className="player-container">
			<NowPlayingInfo
				audioRef={audioRef}
				track={currentTrack}
				trackProgress={trackProgress}
				isPlaying={isPlaying}
				afterFirstPlay={afterFirstPlay}
				updateTrackProgress={updateTrackProgress}
			/>
			<PlayingControls
				isPlaying={isPlaying}
				togglePlay={reduxPlay}
				toPrevTrack={toPrevTrack}
				toNextTrack={toNextTrack}
				toggleShuffle={toggleShuffle}
			/>
			<div className="player-right"></div>
		</div>
	);
};

export default Player;
