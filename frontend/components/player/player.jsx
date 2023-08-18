import React, { useEffect, useRef, useState } from "react";
import NowPlayingInfo from "./now_playing_info";
import PlayingControls from "./playing_controls";

const Player = ({
	params,
	path,
	history,
	tracks,
	isPlaying,
	isShuffling,
	reduxPlay,
}) => {
	// Set local states
	const [trackIndex, setTrackIndex] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0);

	const intervalRef = useRef();

	// Set up play/pause behavior
	const audioRef = useRef(new Audio(audioUrl)); // creates a new HTMLAudioElement
	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	// Set up behavior when changing tracks
	const isReady = useRef(false); // Avoids auto-play
	let title, albumId, audioUrl, albumImageUrl, songArtist;
	useEffect(() => {
		audioRef.current.pause();
		audioRef.current.source = new Audio(audioUrl);
		setTrackProgress(audioRef.current.currentTime);

		if (isReady.current) {
			let { title, albumId, audioUrl, albumImageUrl, songArtist } =
				tracks[trackIndex];
			audioRef.current.play();
			reduxPlay();

			startTimer();
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
				isPlaying={isPlaying}
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
