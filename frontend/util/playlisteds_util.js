export const postPlaylisted = ( songId, playlistId ) => (
    $.ajax({
        method: 'POST',
        url: '/api/playlisteds',
        data: { playlisted: {song_id: songId, playlist_id: playlistId} }
    })
);

export const deletePlaylisted = (playlistedId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/playlisteds/${playlistedId}`
    })
);

export const indexPlaylisted = () => (
    $.ajax({
        method: 'GET',
        url: "/api/playlisteds"
    })
);