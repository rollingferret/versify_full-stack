json.album do
    json.partial! "/api/albums/album", album: @album
end

json.album_artist do
    json.extract! @album.album_artist, :id, :name
end

json.tracks do
    json.array! @album.tracks do |track|
        json.partial! "/api/songs/song", song: track
    end
end