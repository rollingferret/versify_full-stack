import React from "react";
import NowPlayingBox from "./now_playing_box";
import PlayingControls from "./playing_controls";


const Footer = (props) => {
	return (
		<div className="footer-container">
			<NowPlayingBox />
			<PlayingControls />
			<div className="footer-right"></div>
		</div>
	);
};

export default Footer;
