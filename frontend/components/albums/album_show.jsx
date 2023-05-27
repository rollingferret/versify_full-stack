import React, { useEffect } from "react";
import AlbumHeader from "./album_header";
import TrackIndex from "../songs/track_index";

const AlbumShow = ({
    currentAlbum,
    tracks,
    displayAlbum,
    clearCurrent,
    params,
    history,
    currentUser,
}) => {

    useEffect( () => {
        displayAlbum(params.id);
        // document.getElementById("album-show").scrollTo(0, 0);

        return () => clearCurrent();
    }, [params]); // Will run whenever params.id changes, otherwise ArtistShow doesn't re-render

    return (
        <div className="album-show">
            <div className="album-header">
                <AlbumHeader album={currentAlbum} />
            </div>
            <div className="album-nav">

            </div>
            <TrackIndex tracks={tracks} history={history}/>
        </div>
    )
}

export default AlbumShow;