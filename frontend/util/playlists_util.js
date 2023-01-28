export const postPlaylist = (playlist) => {
    debugger;
    return ($.ajax({
        method: 'POST',
        // url: '/api/users/:user_id/playlists',
        url: '/api/playlists',
        data: { playlist }
    }))
};

export const showPlaylist = (playlistId) => 
{   
    return (
    $.ajax({
    method: 'GET',
    url: `/api/playlists/${playlistId}`,
    })
);}

// export const patchPlaylist = (playlist, playlistId) => {
//     return (
//         $.ajax({
//         method: 'PATCH',
//         url: `/api/playlists/${playlistId}`,
//         data: { playlist },
//         })
//     )
// };

export const indexPlaylists = () => (
    $.ajax({
    method: 'GET',
    url: `/api/playlists`,
    })
);

// export const deletePlaylist = (playlistId) => (
//     $.ajax ({
//         method: 'DELETE',
//         url: `/api/playlists/${playlistId}`,
//     })
// );