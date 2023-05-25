import React, { useEffect } from "react";
import AlbumHeader from "./album_header";
import TrackIndexContainer from "../songs/track_index_container";

const AlbumShow = ({
    currentAlbum,
    currentUser,
    displayAlbum,
    clearCurrent,
    history,
    params,
}) => {

    useEffect( () => {
        displayAlbum(params.id);
        // document.getElementById("album-show").scrollTo(0, 0);

        return () => clearCurrent();
    }, [params]); // Will run whenever params.id changes, otherwise ArtistShow doesn't re-render

    console.log("CURRENT", currentAlbum)
    return (
        <div className="album-show">
            <div className="album-header">
                <AlbumHeader album={currentAlbum} />
            </div>
            <div className="album-nav">

            </div>
            <div className="song-index">
                <TrackIndexContainer />
            </div>
        </div>
    )
}

export default AlbumShow;