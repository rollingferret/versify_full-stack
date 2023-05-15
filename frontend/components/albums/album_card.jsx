import React from "react";

const AlbumCard = ({ album, 
    history,
}) => {
    
    const { id,
        title,
        photo_url,
        year,
    } =  album;

    console.log(photo_url)

    return (
        <div className="card album">
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