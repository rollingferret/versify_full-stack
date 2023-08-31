import React from "react";
import { GrCirclePlay } from "react-icons/gr";
import { BiSkipPrevious, BiSkipNext, BiShuffle } from "react-icons/bi";
import { BsRepeat, BsRepeat1, BsPauseCircle } from "react-icons/bs";
import { useEffect } from "react";

const PlayingControls = ({
	isPlaying,
	trackProgress,
	togglePlay,
	toPrevTrack,
	toNextTrack,
	toggleShuffle,
}) => {
	return (
		<div className="playing-controls">
			<BiShuffle
				className="player__grey-icon repeat-shuffle-icon"
				aria-label="Shuffle"
				onClick={toggleShuffle}
			/>
			<BiSkipPrevious
				className="player__grey-icon"
				aria-label="Previous"
				onClick={toPrevTrack}
			/>
			{isPlaying ? (
				<BsPauseCircle
					className="player__white-icon"
					aria-label="Pause"
					onClick={togglePlay}
				/>
			) : (
				<GrCirclePlay
					className="player__white-icon"
					aria-label="Play"
					onClick={togglePlay}
				/>
			)}
			<BiSkipNext
				className="player__grey-icon"
				aria-label="Next"
				onClick={toNextTrack}
			/>
			<BsRepeat // TODO: implement repeat functionality
				className="player__grey-icon repeat-shuffle-icon"
				aria-label="Repeat"
			/>
		</div>
	);
};

export default PlayingControls;
