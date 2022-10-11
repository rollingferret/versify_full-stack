export const postPlaylist = (playlist) => {
    return ($.ajax({
        method: 'POST',
        // url: '/api/users/:user_id/playlists',
        url: '/api/playlists',
        data: { playlist }
    }))
};

export const patchPlaylist = (playlist, id) => {
    return (
        $.ajax({
        method: 'PATCH',
        url: `/api/users/:user_id/playlists/:id`,
        // url: `/api/playlists/${id}`,
        data: { playlist },
        })
    )
};

export const showPlaylist = (id) => (
    $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`,
    })
);

export const indexPlaylists = () => (
// export const indexPlaylists = (userId) => (
    $.ajax({
    method: 'GET',
    url: `/api/playlists`,
    // url: `/api/users/${userId}/playlists`,
    })
);

export const deletePlaylist = (id) => (
    $.ajax ({
        method: 'DELETE',
        url: `/api/playlists/${id}`,
    })
);