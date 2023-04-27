import React from "react";


const ArtistCard = ({
    artist,
    urlParams,
    history,
    displayArtist,
}) => {
    const { id,
        name,
        photo_url,
    } =  artist;

    const clickToShowArtist = (e) => {
        e.preventDefault();
        displayArtist(id)
        history.push(`/artist/${id}`)
    }

    return (
        <div className="card" onClick={clickToShowArtist}> 
            <img src={photo_url} alt="" srcSet="" />
            <div className="card-title">
                {name}
            </div>
            <div className="card-subtitle">
                Artist
            </div>
        </div>
    )
}

export default ArtistCard;