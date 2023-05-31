export const postPlaylistedSong = ( songId, playlistId ) => (
    $.ajax({
        method: 'POST',
        url: '/api/playlisted_songs',
        data: { playlisted_song: {song_id: songId, playlist_id: playlistId} }
    })
);

export const deletePlaylistedSong = (playlistedSongId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/playlisted_songs/${playlistedSongId}`
    })
);

export const indexPlaylistedSongs = () => (
    $.ajax({
        method: 'GET',
        url: "/api/playlisted_songs"
    })
);