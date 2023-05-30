class Api::PlaylistedSongController < ApplicationController

    def create
        @playlisted_song = PlaylistedSong.new(playlisted_song_params)
        if @playlisted_song.save!
            render :show
        else
            render json: @playlisted_song.errors.full_messages, status: 422
        end
    end

    def destroy
        @playlisted_song = PlaylistedSong.find(params[:id])
        if @playlisted_song && (@playlisted_song.playlist.user_id == current_user.id)
            if @playlisted_song.destroy!
                render :show
            end
        else
            render json: @playlisted_song.errors.full_messages, status: 422
        end
    end


    def index
        @playlist_songs = PlaylistedSong.includes(:song).find_by(playlist_id: params[:playlist_id])
        render :index
    end





    private
    def playlisted_song_params
        params.require(:playlisted_song).permit(:song_id, :playlist_id)
    end
end
