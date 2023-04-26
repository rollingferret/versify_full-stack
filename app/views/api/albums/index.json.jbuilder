json.albums do
    if @albums != nil
        # @albums.each do |album|
            # json.set! album.id do #IF WE WANT AN OBJECT
            #     json.partial! 'album', album: album
            # end
        # end
        json.array! @albums # returns an array of albums in year order
    end
end

json.artists do 
    @albums.each do |album| 
        json.set! album.artist_id do
            json.partial!("api/artists/artist", artist: album.album_artist)
        end
    end
end