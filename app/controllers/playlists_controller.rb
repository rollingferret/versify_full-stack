class PlaylistsController < ApplicationController
    before_action :require_login

    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.user_id = current_user.id
        # if @user.save
        #     login(@user)
        #     render :show
        # else
        #     render json: @user.errors.full_messages, status: 401
        # end
    end

    # start with create
    # edit button will make an edit request to the backend
    # when we fetch songs from the database, order songs by track number
        # fetching an album


    private

    def selected_playlist
        Playlist.find(params[:id])
    end

    def playlist_params
        params.require(:playlist).permit(:playlistname, :email, :password, :birthday, 
            :password_confirmation, :email_confirmation)
        end
    
end
