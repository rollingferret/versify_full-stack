class Api::PlaylistsController < ApplicationController
    # before_action :require_login

    def index
        # If we had passed user.id through the url, we'd get it from params
        @playlists = 
            Playlist.where(user_id: current_user.id).order('updated_at DESC')
            # Playlist.where(user_id: current_user.id).includes(:songs).order('updated_at DESC')
        render :index
    end

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save!
            render :show
        else
            render json: @playlist.errors.full_messages, status: 401
        end
    end

    def show
        @playlist = Playlist.includes(:playlist_songs).find(params[:id])
        if @playlist && @playlist.user_id == current_user.id
            # currently only showing user's own playlists
            render :show
        else
            render json: ['Could not find playlist']
            render json: @playlist.errors.full_messages << ['Could not find playlist'], status: 404
        end
    end

    def update
        @playlist = Playlist.find(params[:id])
        if @playlist && @playlist.user_id == current_user.id
            if @playlist.update(playlist_params)
                render :show
            end
        else
            render json: @playlist.errors.full_messages, status: 401
        end
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        if @playlist && @playlist.user_id == current_user.id
            if @playlist.destroy!
                render :show
            else
                render json: @playlist.errors.full_messages, status: 500
            end
        else
            render json: @playlist.errors.full_messages, status: 401
        end
    end


    # start with create
    # edit button will make an edit request to the backend
    # when we fetch songs from the database, order songs by track number
        # fetching an album


    private

    # def selected_playlist
    #     Playlist.find(params[:playlist_id])
    # end
        

    def playlist_params
        params.require(:playlist).permit(:title, :description, :user_id)
    end
    
end
