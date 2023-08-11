import React from "react";
import { GrCirclePlay } from "react-icons/gr";
import { BiSkipPrevious, BiSkipNext, BiShuffle } from "react-icons/bi";
import { BsRepeat, BsRepeat1, BsPauseCircle } from "react-icons/bs";

const PlayingControls = ({ isPlaying }) => {
	return (
		<div className="playing-controls">
			<BiShuffle className="player__grey-icon repeat-shuffle-icon" />
			<BiSkipPrevious className="player__grey-icon" />
			{isPlaying ? (
				<GrCirclePlay className="player__white-icon" />
			) : (
				<BsPauseCircle className="player__white-icon" />
			)}
			<BiSkipNext className="player__grey-icon" />
			<BsRepeat className="player__grey-icon repeat-shuffle-icon" />
		</div>
	);
};

export default PlayingControls;
