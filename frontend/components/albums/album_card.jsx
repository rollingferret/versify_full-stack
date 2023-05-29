import React from "react";

const AlbumCard = ({ album, 
    history,
    displayAlbum,
}) => {
    
    const { id,
        title,
        albumPhotoUrl,
        year,
    } =  album;

    const clickToShowAlbum = (e) => {
        e.preventDefault();
        displayAlbum(id);
        return history.push(`/album/${id}`)
    }

    return (
        <div className="card album" onClick={clickToShowAlbum}>
            <div className="album-card-art">
                <img src={albumPhotoUrl} alt="" />
            </div>
            <div className="card-title">
                {title}
            </div>
            <div className="card-subtitle">
                {year} • Album
            </div>
        </div>
    )
}

export default AlbumCard;