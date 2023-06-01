export const postPlaylisted = ( songId, playlistId ) => (
    $.ajax({
        method: 'POST',
        url: '/api/playlisteds',
        data: { playlisted: {song_id: songId, playlist_id: playlistId} }
    })
);

export const deletePlaylisted = (playlistedSongId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/playlisteds/${playlistedSongId}`
    })
);

export const indexPlaylisted = () => (
    $.ajax({
        method: 'GET',
        url: "/api/playlisteds"
    })
);