import React, { useEffect, useRef } from "react";

import ArtistHeader from "./artist_header";
import AlbumIndex from "../albums/album_index";
import ArtistPageMenuBar from "./artist_page_menu_bar";
import CollabSongIndex from "../songs/collab_song_index";

const ArtistShow = ({
	currentArtist,
	albums,
	collabSongs,
	params,
	currentUser,
	history,
	path,
	displayArtist,
	displayAlbum,
	clearCurrent,
}) => {
	useEffect(() => {
		displayArtist(params.id);

		const rendered = document.getElementById("artist-show");
		rendered ? rendered.scrollTo(0, 0) : null;

		return () => {
			clearCurrent();
		};
	}, [params]); // Will run whenever params.id changes, otherwise ArtistShow doesn't re-render

	const artistShowRef = useRef();

	const artistShow = (
		<>
			<div
				className="artist-show-background"
				style={{
					backgroundImage: `url(${currentArtist.photoUrl})`,
				}}
			>
				<div className="artist-show" ref={artistShowRef}>
					<div className="artist-header">
						<ArtistHeader currentArtist={currentArtist} />
					</div>
					<div className="artist-nav">
						<ArtistPageMenuBar
							artistShowRef={artistShowRef}/>
					</div>
					{albums?.length > 0 && (
						<AlbumIndex
							albums={albums}
							history={history}
							displayAlbum={displayAlbum}
						/>
					)}
					{collabSongs?.length > 0 && (
						<CollabSongIndex
							songs={collabSongs}
							history={history}
							displayAlbum={displayAlbum}
							currentArtist={currentArtist}
						/>
					)}
				</div>
			</div>
		</>
	);

	return currentArtist.photoUrl && artistShow;
};

export default ArtistShow;
