import React from "react";
import { GrCirclePlay } from "react-icons/gr";
import { BiSkipPrevious, BiSkipNext, BiShuffle } from "react-icons/bi";
import { BsRepeat, BsRepeat1, BsPauseCircle } from "react-icons/bs";

const PlayingControls = ({ isPlaying, togglePlay }) => {
	// Player functions
	const toPrevTrack = () => {
		console.log("TODO go to prev");
	};

	const toNextTrack = () => {
		console.log("TODO go to next");
	};

	return (
		<div className="playing-controls">
			<BiShuffle
				className="player__grey-icon repeat-shuffle-icon"
				aria-label="Shuffle"
			/>
			<BiSkipPrevious
				className="player__grey-icon"
				aria-label="Previous"
				onClick={toPrevTrack}
			/>
			{isPlaying ? (
				<GrCirclePlay
					className="player__white-icon"
					aria-label="Play"
					onClick={togglePlay}
				/>
			) : (
				<BsPauseCircle
					className="player__white-icon"
					aria-label="Pause"
					onClick={togglePlay}
				/>
			)}
			<BiSkipNext
				className="player__grey-icon"
				aria-label="Next"
				onClick={toNextTrack}
			/>
			<BsRepeat
				className="player__grey-icon repeat-shuffle-icon"
				aria-label="Repeat"
			/>
		</div>
	);
};

export default PlayingControls;
