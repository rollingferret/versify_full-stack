import React from "react";

const ArtistLink = ({
    artist,
    currentArtist,
    displayArtist,
}) => {

    const { id,
        name,
    } = artist;

    const handleClick = (e) => {
        e.preventDefault();
        return displayArtist(id);
    }

    if (name === currentArtist.name) {
        return <span>{name}</span>
    } else {
        return <a onClick={handleClick} className="artist-link">{name}</a>
    }

}

export default ArtistLink;