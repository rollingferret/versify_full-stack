json.playlist do
    json.extract! @playlist, :id, :title, :description, :user_id
end

json.songs do
    json.array! @playlist.playlist_songs.each_with_index.to_a do |song, index|
        json.partial! "api/songs/song", song: song
        json.album song.album.title
        json.playlistedId @playlist.playlisted.to_a[index].id
    end
end
