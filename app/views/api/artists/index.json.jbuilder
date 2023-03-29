if @artists != nil
    json.array! @artists, :id, :name, :photo_url
end