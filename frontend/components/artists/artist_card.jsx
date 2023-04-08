import React from "react";


const ArtistCard = ({artist}) => {
    const { name,
        photo_url,
    } =  artist;

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