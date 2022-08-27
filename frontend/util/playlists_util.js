export const postPlaylist = (playlist) => {
    return ($.ajax({
        method: 'POST',
        url: '/api/playlists',
        data: { playlist }
    }))
};

export const patchPlaylist = (playlist, id) => {
    return (
        $.ajax({
        method: 'PATCH',
        url: `/api/playlists/${id}`,
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
    $.ajax({
    method: 'GET',
    url: `/api/playlists`,
    })
);

export const deletePlaylist = (id) => (
    $.ajax ({
        method: 'DELETE',
        url: `/api/playlists/${id}`,
    })
);