json.song do
    json.partial! "/api/songs/song", song: @song
end

json.album do
    json.partial! "/api/albums/album", album: @song.album
end

json.song_artist do
    json.extract! @song.song_artist, :id, :name
end

json.collab_artists do
    json.array! @song.collab_artists do |artist|
        json.extract! artist, :id, :name
    end
end