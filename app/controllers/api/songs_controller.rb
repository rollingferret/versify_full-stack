class Api::SongsController < ApplicationController

    def index
        @songs = Song.includes(:album, :song_artist).all.order(Arel.sql("lower(title) ASC"))
    end
end
