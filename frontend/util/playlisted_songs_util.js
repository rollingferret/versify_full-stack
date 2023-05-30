export const postPlaylistedSong = (songId) => (
    $.ajax({
        method: 'POST',
        url: '/api/playlisted_songs',
        data: { songId }
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