import React from "react";

const AlbumCard = ({ album, 
    history,
    displayAlbum,
}) => {
    
    const { id,
        title,
        photo_url,
        year,
    } =  album;
    console.log(photo_url)

    const clickToShowAlbum = (e) => {
        e.preventDefault();
        displayAlbum(id);
        return history.push(`/album/${id}`)
    }

    return (
        <div className="card album" onClick={clickToShowAlbum}>
            <div className="album-card-art">
                <img src={photo_url} alt="" />
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