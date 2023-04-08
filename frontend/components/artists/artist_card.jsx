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
        displayArtist(id),
        history.push(`/artists/${id}`)
    }

    return (
        <div className="card"> 
            <img src={photo_url} alt="" srcset="" />
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