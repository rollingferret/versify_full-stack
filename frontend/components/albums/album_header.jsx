import React from 'react';

const AlbumHeader = ({ album,
}) => {

  console.log("ALBUM", album)
  const { id,
      title,
      genre,
      year,
      albumPhotoUrl,
  } = album;

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
          <h3>{genre} • {year}</h3>
        </div>
      </div>
    </>
  );
};

export default AlbumHeader;