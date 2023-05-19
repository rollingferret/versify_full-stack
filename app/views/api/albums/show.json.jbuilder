totalDuration = 0

json.tracks do
    json.array! @album.tracks do |track|
        json.partial! "/api/songs/song", song: track
        totalDuration += track.duration
    end
end

json.album do
    json.partial! "/api/albums/album", album: @album
    json.hours totalDuration / 3600
    json.minutes ((totalDuration % 3600) / 60).floor
    json.albumArtist do
        json.extract! @album.album_artist, :id, :name
    end
end