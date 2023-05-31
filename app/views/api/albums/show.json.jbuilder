totalDuration = 0

json.songs do
    json.array! @album.tracks do |track|
        json.partial! "/api/songs/song", song: track
        totalDuration += track.duration
    end
end

json.album do
    json.partial! "/api/albums/album", album: @album
    json.hrs totalDuration / 3600
    json.mins ((totalDuration % 3600) / 60).floor
    json.duration totalDuration
    json.number @album.tracks.length
    json.albumArtist do
        json.extract! @album.album_artist, :id, :name
    end
end