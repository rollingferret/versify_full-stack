class Api::SessionsController < ApplicationController
    def create
      debugger
      @user = User.find_by_credentials(
        params[:user][:username], params[:user][:password]
      )
  
      if @user
        login(@user)
        render "/api/@playlists"
      else
        render json: ["Please enter correct login information to proceed"], status: 401
      end
    end
  
    def destroy
      @user = current_user
      if @user
        logout
        render "/"
      else
        render json: ["Please sign in first"], status: 404
      end
    end
  end
  