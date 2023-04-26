class Api::AlbumsController < ApplicationController

    def index # This would be index for an All Albums feature
      @albums = Album.includes(:album_artist).all.order("year DESC")
      # @albums = Album.includes(:tracks).all.order("year DESC")
      # @albums = Album.all.order("year DESC")
      render :index
    end

    def show
      @album = Album.includes(:album_artist).find(params[:id])
      render :show
      # @album = Album.includes(:tracks, :album_artist).find(params[:id])
    end

    
    
  private
    def album_params
      params.require(:album).permit(:artist_id)
    end
end