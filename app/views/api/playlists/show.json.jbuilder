# json.partial! "api/playlists/playlist", playlist: @playlist

json.playlist do
    json.extract! @playlist, :id, :title, :description, :user_id
    # if !@playlist.songs.empty?
    #     @playlist['totalItems'] = @playlist.length;

    #     totalDuration = 0;
    #     playlist.songs.each do |song| 
    #         totalDuration += song.duration;
    #     end
    #     currPlaylist[totalDuration] = totalDuration;            return currPlaylist;

    
    # if @playlist.empty?
    #     @playlist['art]'] == nil;
    # else
    #     if @playlist.songs.length > 0 && @playlist.songs.length < 4
    #         @playlist['art]'] = @playlist.songs[1].art;
    #     elsif @playlist.songs.length >= 4
    #         @playlist['art1]'] = @playlist.songs[1].art;
    #         @playlist['art2]'] = @playlist.songs[2].art;
    #         @playlist['art3]'] = @playlist.songs[3].art;
    #         @playlist['art4]'] = @playlist.songs[4].art;
    #     end
    # end
end
