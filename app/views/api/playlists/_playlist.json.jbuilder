json.playlist do
    json.extract! @playlist, :id, :title, :description, :user_id
end

json.songs do
    json.array! @playlist.playlist_songs do |song|
        json.partial! "api/songs/song", song: song
    end
end