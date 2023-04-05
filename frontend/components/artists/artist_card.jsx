import React from "react";


const ArtistCard = ({artist}) => {
    const { name,
        photo_url,
    } =  artist;

    return (
        <div className="index-grid-item">
            {name}
            <img src={photo_url} alt="" srcset="" />
        </div>
    )
}

export default ArtistCard;