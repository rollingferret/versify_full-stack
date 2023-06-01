class Api::SongsController < ApplicationController

    def index
        @songs = Song.includes(:album, :song_artist, :collab_artists).all.order(Arel.sql("lower(title) ASC"))
    end

    def show
        @song = Song.includes(:album, :song_artist, :collab_artists).find(params[:id])
        if @song
            render :show
        else
            render json: @song.errors.full_messages, status: 404
        end
    end
end
