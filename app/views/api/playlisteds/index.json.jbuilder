json.playlistedSong do
    json.playlistedSongId @playlisted_song.id
    json.playlistId @playlisted_song.playlist_id
    json.songId @playlisted_song.song_id
end
