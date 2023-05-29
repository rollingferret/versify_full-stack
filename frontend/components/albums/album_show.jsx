import React, { useEffect } from "react";

import AlbumHeader from "./album_header";
import AlbumNav from "./album_nav";
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
        
        const rendered = document.getElementById("album-show");
        rendered ? rendered.scrollTo(0, 0) : null;

        return () => clearCurrent();
    }, [params]); // Will run whenever params.id changes, otherwise ArtistShow doesn't re-render

    const albumShow = (
        <div className="album-show">
            <div className="album-header">
                <AlbumHeader album={currentAlbum} history={history} />
            </div>
            <div className="album-nav">
                <AlbumNav />
            </div>
            <TrackIndex tracks={tracks} history={history}/>
        </div>
    )
    return currentAlbum.albumPhotoUrl ? albumShow : null
}

export default AlbumShow;