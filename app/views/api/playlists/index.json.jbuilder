if @playlists != nil
    json.array! @playlists, :id, :title
end