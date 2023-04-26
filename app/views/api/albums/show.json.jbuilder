json.album do
    json.partial! "/api/albums/album", album: @album
    json.album_artist @album.album_artist
end
