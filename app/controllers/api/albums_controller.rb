class Api::AlbumsController < ApplicationController

    def index # This would be index for an All Albums feature
      @albums = Album.includes(:album_artist).all.order(Arel.sql("lower(title) ASC"))
      render :index
    end

    def show
      @album = Album.includes(:album_artist, :tracks).order("songs.tracknum ASC").find(params[:id])
      render :show
    end

    
    
  private
    def album_params
      params.require(:album).permit(:artist_id)
    end
end