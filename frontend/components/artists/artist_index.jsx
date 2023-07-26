import React, { useEffect } from "react";
import ArtistCard from "./artist_card";

const ArtistIndex = ({
    artists,
    params,
    history,
    path,
    fetchArtists,
    displayArtist,
}) => {
    useEffect(() => {
        fetchArtists();
    }, []);

    const artistMap = artists
        ? artists.map((artist) => (
              <ArtistCard
                  key={`${artist.name + "ind"}`}
                  artist={artist}
                  urlParams={params}
                  history={history}
                  displayArtist={displayArtist}
              />
          ))
        : null;

    const artistIndex = artists ? (
		<div className="artist-index-grid">{artistMap}</div>
	) : null;

    return artistMap ? <div className="home-body">{artistIndex}</div> : null;
};

export default ArtistIndex;
