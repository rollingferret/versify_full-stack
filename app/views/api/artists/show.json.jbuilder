json.artist do
    json.partial! "api/artists/artist", artist: @artist
end

json.albums do
    json.array! @artist.albums.each do |album|
        json.partial!("api/albums/album", album: album)
    end
end

json.collabs do
    json.array! @artist.collabs.each do |collab|
        json.partial!("api/collabs/collab", collab: collab)
    end
end