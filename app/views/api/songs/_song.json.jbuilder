json.extract! song, :id, :title, :album_id, :tracknum, :duration, :audio_url, :album_image_url
json.songArtist do 
    json.partial!("api/artists/artist", artist: song.song_artist)
end
json.collabArtists do
    json.array! song.collab_artists.each do |collab_artist|
        json.partial!("api/artists/artist", artist: collab_artist)
    end
end