import React, { useEffect } from "react";

import AlbumHeader from "./album_header";
import AlbumNav from "./album_nav";
import SongIndex from "../songs/song_index";

const AlbumShow = ({
    currentAlbum,
    tracks,
    params,
    history,
    currentUser,
    source,
    songCardDropdownItems,
    displayAlbum,
    clearCurrent,
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
                <AlbumHeader
                    album={currentAlbum}
                    history={history} 
                />
            </div>
            <div className="album-nav">
                <AlbumNav />
            </div>
            <SongIndex
                source={source}
                songCardDropdownItems={songCardDropdownItems}
                songs={tracks}
                history={history}
            />
        </div>
    )
    return currentAlbum.albumPhotoUrl ? albumShow : null
}

export default AlbumShow;