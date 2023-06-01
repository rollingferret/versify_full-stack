class Api::PlaylistedsController < ApplicationController

    def create
        @playlisted = Playlisted.new(playlisted_params)
        if @playlisted.save!
            render :show
        else
            render json: @playlisted.errors.full_messages, status: 422
        end
    end

    def destroy
        @playlisted = Playlisted.find(params[:id])
        if @playlisted && (@playlisted.playlist.user_id == current_user.id)
            if @playlisted.destroy!
                render :show
            end
        else
            render json: @playlisted.errors.full_messages, status: 422
        end
    end


    def index
        @playlisted = Playlisted.includes(:song).find_by(playlist_id: params[:playlist_id])
        render :index
    end





    private
    def playlisted_params
        params.require(:playlisted).permit(:song_id, :playlist_id)
    end
end
