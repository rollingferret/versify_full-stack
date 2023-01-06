# if @playlists != nil
#     @playlists.each do |playlist|
#         json.set! playlist.id do
#             json.extract! playlist, :id, :title
#         end
#     end
# end

if @playlists != nil
    json.array! @playlists, :id, :title
    debugger
end