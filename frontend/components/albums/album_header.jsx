import React from 'react';

const AlbumHeader = ({ album,
}) => {

  const { id,
      title,
      genre,
      year,
      albumPhotoUrl,
      number,
      hrs,
      mins,
      duration,
  } = album;

  const songWord = number === 1 ? "song" : "songs";

  return (
    <>
      <div className="album-art">
        <img src={albumPhotoUrl} />
      </div>
      <div className="album-header-text">
        <h2>Album</h2>
        <div className="playlist-title">
          {title}
        </div>
        <div id="description">
          <h3>{genre} • {year} • {number} {songWord}, {hrs} h {mins} min</h3>
        </div>
      </div>
    </>
  );
};

export default AlbumHeader;