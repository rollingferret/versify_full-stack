import React from "react";
import { GrCirclePlay } from "react-icons/gr";
import { BiSkipPrevious, BiSkipNext, BiShuffle } from "react-icons/bi";
import { BsRepeat, BsRepeat1 } from "react-icons/bs";

const PlayingControls = (props) => {
	return (
		<div className="playing-controls">
			<BiShuffle className="footer__grey-icon"/>
			<BiSkipPrevious className="footer__grey-icon"/>
			<GrCirclePlay className="footer__white-icon" />
			<BiSkipNext />
			<BsRepeat className="footer__grey-icon"/>
		</div>
	);
};

export default PlayingControls;
