Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :playlists, only: [:create, :edit, :show, :index]
    end
    resource :session, only: [:create, :destroy]
    
  end
  
  root 'static_pages#root'
end


# /Users/EtaCarinaePrima/Dropbox/aabootcamp/versify_fullstack rr
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#        api_user_playlists GET    /user/playlists(.:format)           api/playlists#index {:format=>:json}
#                           POST   /user/playlists(.:format)           api/playlists#create {:format=>:json}
#    edit_api_user_playlist GET    /user/playlists/:id/edit(.:format)  api/playlists#edit {:format=>:json}
#         api_user_playlist GET    /user/playlists/:id(.:format)       api/playlists#show {:format=>:json}
#                 api_users POST   /api/users(.:format)                              api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                            api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                            api/sessions#create {:format=>:json}