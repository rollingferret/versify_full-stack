export const indexAlbums = () => (
    $.ajax({
            method: "GET",
            url: "/api/albums",
        })
)

export const showAlbum = (albumId) => (
    $.ajax({
        method: "GET",
        url: `/api/albums/${albumId}`,
    })
)