import React from "react";
import { GrCirclePlay } from "react-icons/gr";
import { BiSkipPrevious, BiSkipNext, BiShuffle } from "react-icons/bi";
import { BsRepeat, BsRepeat1, BsPauseCircle } from "react-icons/bs";

const PlayingControls = ({
	trackProgress,
	reduxPlay,
	toPrevTrack,
	toNextTrack,
	shufflePlay,
}) => {
	return (
		<div className="playing-controls">
			<BiShuffle
				className="player__grey-icon repeat-shuffle-icon"
				aria-label="Shuffle"
				onClick={shufflePlay}
			/>
			<BiSkipPrevious
				className="player__grey-icon"
				aria-label="Previous"
				onClick={toPrevTrack}
			/>
			{trackProgress !== 0 ? (
				<BsPauseCircle
					className="player__white-icon"
					aria-label="Pause"
					onClick={reduxPlay}
				/>
			) : (
				<GrCirclePlay
					className="player__white-icon"
					aria-label="Play"
					onClick={reduxPlay}
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
