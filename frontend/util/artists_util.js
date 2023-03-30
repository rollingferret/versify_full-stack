export const indexArtists = () => (
    $.ajax({
        method: 'GET',
        url: '/api/artists',
    })
)

export const showArtist = (artistId) => (
    $.ajax({
        method: 'GET',
        url: `/api/artists/${artistId}`,
    })
)