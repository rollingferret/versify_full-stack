Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api, defaults: {format: :json} do
  resources :users, only: [:create]
  resources :playlists, only: [:index, :create, :update, :show, :destroy]
  resource :session, only: [:create, :destroy]
end
  
  root 'static_pages#root'
end

# /Users/EtaCarinaePrima/Dropbox/aabootcamp/versify_fullstack rails routes
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#        api_user_playlists GET    /api/users/:user_id/playlists(.:format)                                                  api/playlists#index {:format=>:json}
#                           POST   /api/users/:user_id/playlists(.:format)                                                  api/playlists#create {:format=>:json}
#         api_user_playlist GET    /api/users/:user_id/playlists/:id(.:format)                                              api/playlists#show {:format=>:json}
#                           PATCH  /api/users/:user_id/playlists/:id(.:format)                                              api/playlists#update {:format=>:json}
#                           PUT    /api/users/:user_id/playlists/:id(.:format)                                              api/playlists#update {:format=>:json}
#                           DELETE /api/users/:user_id/playlists/:id(.:format)                                              api/playlists#destroy {:format=>:json}
#          api_user_session DELETE /api/users/:user_id/session(.:format)                                                    api/sessions#destroy {:format=>:json}
#                           POST   /api/users/:user_id/session(.:format)                                                    api/sessions#create {:format=>:json}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                      root GET    /                                                                                        static_pages#root