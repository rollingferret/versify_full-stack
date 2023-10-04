json.extract! song, :id, :title, :tracknum
json.albumId song.album_id
json.duration song.duration
json.mins (song.duration / 60).floor
json.secs (song.duration % 60).to_s.rjust(2, '0')
json.audioUrl song.audio_url
json.albumImageUrl song.album_image_url
json.songArtist do 
    json.extract! song.song_artist, :id, :name
end
json.collabArtists do
    json.array! song.collab_artists.each do |collab_artist|
        json.extract! collab_artist, :id, :name
    end
end
