import React from "react";

const ArtistHeader = ({ currentArtist,
}) => {


    return <>
        {/* <div className="playlist-art">
        </div> */}
        <div className="artist-header-text">
            <div id="type">
                <h2>Verified Artist</h2>
            </div>
            <div id="title">
                {currentArtist.name}
            </div>
            <div id="description">
                <h3>{Math.floor(Math.random() * 50000000).toLocaleString()} monthly listeners</h3>
            </div>
    </div>

    </>
}

export default ArtistHeader;