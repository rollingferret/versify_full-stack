export const postPlaylist = playlist => (
    $.ajax({
        method: 'POST',
        url: '/api/playlists',
        data: { playlist },
    })
);

export const patchPlaylist = (id) => (
    $.ajax({
    method: 'PATCH',
    url: `/api/playlists/${id}`,
    data: { playlist },
    })
);

export const showPlaylist = (id) => (
    $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`,
    })
);

export const indexPlaylist = () => (
    $.ajax({
    method: 'GET',
    url: `/api/playlists/${id}`,
    })
);

export const deletePlaylist = () => (
    $.ajax ({
        method: 'DELETE',
        url: `/api/playlists/${id}`,
    })
);