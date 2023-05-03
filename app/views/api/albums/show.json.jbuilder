json.album do
    json.partial! "/api/albums/album", album: @album
end

json.album_artist do
    json.partial! "/api/artists/artist", artist: @album.album_artist
end

json.tracks do
    json.array! @album.tracks do |track|
        json.partial! "/api/tracks/track", track: track
    end
end