class Api::ArtistsController < ApplicationController

    def index
        @artists = Artist.all
        render :index
    end

    def show
        @artist = Artist.includes(:albums).find(params[:id])
        if @artist
            render :show
        else
            # render json: @artist.errors.full_messages << ['Could not find artist. Please try again'], status: 404
            render json: @artist.errors.full_messages, status: 404
        end
    end

    # def find
    #     @artists = 
    #         Artist.sanitize_sql_like("name = ?", "%" + params[:name] + "%")
    #             .order("name DESC")
    #     render :index
    # end


    private
        def artist_params
            params.require(:artist).permit(:name)
        end
end
