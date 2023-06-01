json.playlisted do
    json.playlistedId @playlisted.id
    json.playlistId @playlisted.playlist_id
    json.songId @playlisted.song_id
end
