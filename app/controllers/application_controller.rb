class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user, :logout 

    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        # this is session cookie, not a table
        @current_user = user
    end

    def require_login
        redirect_to new_session_url unless logged_in?
    end

    def logout
        debugger
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

end
