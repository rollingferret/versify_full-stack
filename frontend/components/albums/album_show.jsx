import React, { useEffect } from "react";
import AlbumHeader from "./album_header";

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
        debugger;
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

            </div>
        </div>
    )
}

export default AlbumShow;