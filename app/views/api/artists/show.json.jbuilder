json.artist do
    json.partial! "api/artists/artist", artist: @artist
end

json.albums do
    json.array! @artist.albums.each do |album|
        json.extract! album, :id, :title, :year, :photo_url
    end
end

json.collab_songs do
    json.array! @artist.collab_songs.each do |song|
        json.partial!("api/songs/song", song: song)
    end
end