export const postPlaylistedSong = ( playlistedSong ) => (
    $.ajax({
        method: 'POST',
        url: '/api/playlisted_songs',
        data: { playlisted_song: playlistedSong }
    })
);

export const deletePlaylistedSong = (songId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/playlisted_songs/${songId}`
    })
);

export const indexPlaylistedSongs = () => (
    $.ajax({
        method: 'GET',
        url: "/api/playlisted_songs"
    })
);