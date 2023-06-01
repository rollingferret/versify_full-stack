if @songs
    json.songs do
        json.array! @songs.each do |song|
            json.partial! "api/songs/song", song: song
            json.song_artist do
                json.partial! "api/artists/artist", artist: song.song_artist
            end
            json.playlistedId @playlisted_song.id
            json.album do
                json.partial! "api/albums/album", album: song.album
            end
        end
    end
end