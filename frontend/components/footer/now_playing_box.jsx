import React from "react";

const NowPlayingBox = (props) => {
	return (
		<div className="now-playing-box">
			<div className="now-playing-art"></div>
			<div className="now-playing-info">
				<div className="now-playing-title">TITLE</div>
				<div className="now-playing-artist">ARTIST</div>
			</div>
			<div className="now-playing-buttons"></div>
		</div>
	);
};

export default NowPlayingBox;
