import React from "react";

const ArtistLink = ({
    artist,
    currentArtist,
    displayArtist,
    history,
}) => {

    const { id,
        name,
    } = artist;

    const handleClick = (e) => {
        e.preventDefault();
        return history.push(`/artist/${id}`);
    }

    if (currentArtist === null) {
        return <a onClick={handleClick} className="artist-link">{name}</a>
    } else {
        if (name === currentArtist.name) {
            return <span>{name}</span>
        } else {
            return <a onClick={handleClick} className="artist-link">{name}</a>
        }
    }
}

export default ArtistLink;