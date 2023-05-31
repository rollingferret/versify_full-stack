Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api, defaults: {format: :json} do
  resource :session, only: [:create, :destroy]
  resources :users, only: [:create]
  resources :playlists, only: [:index, :show, :create, :update, :destroy]
  resources :artists, only: [:index, :show]
  resources :albums, only: [:index, :show]
  resources :songs, only: [:index, :show]
  resources :playlisted_songs, only: [:create, :destroy]
end
  
  root 'static_pages#root'
end

# currentUser is a special instance, where it can be accessed everywhere so you don't have to pass it as an argument



#                    Prefix Verb   URI Pattern                                  Controller#Action
#               api_session DELETE /api/session(.:format)                       api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                       api/sessions#create {:format=>:json}
#                 api_users POST   /api/users(.:format)                         api/users#create {:format=>:json}
#             api_playlists GET    /api/playlists(.:format)                     api/playlists#index {:format=>:json}
#                           POST   /api/playlists(.:format)                     api/playlists#create {:format=>:json}
#              api_playlist GET    /api/playlists/:id(.:format)                 api/playlists#show {:format=>:json}
#                           PATCH  /api/playlists/:id(.:format)                 api/playlists#update {:format=>:json}
#                           PUT    /api/playlists/:id(.:format)                 api/playlists#update {:format=>:json}
#                           DELETE /api/playlists/:id(.:format)                 api/playlists#destroy {:format=>:json}
#               api_artists GET    /api/artists(.:format)                       api/artists#index {:format=>:json}
#                api_artist GET    /api/artists/:id(.:format)                   api/artists#show {:format=>:json}
#                api_albums GET    /api/albums(.:format)                        api/albums#index {:format=>:json}
#                 api_album GET    /api/albums/:id(.:format)                    api/albums#show {:format=>:json}
#                 api_songs GET    /api/songs(.:format)                         api/songs#index {:format=>:json}
#                  api_song GET    /api/songs/:id(.:format)                     api/songs#show {:format=>:json}
#      api_playlisted_songs GET    /api/playlisted_songs(.:format)              api/playlisted_songs#index {:format=>:json}
#                           POST   /api/playlisted_songs(.:format)              api/playlisted_songs#create {:format=>:json}
#       api_playlisted_song DELETE /api/playlisted_songs/:id(.:format)          api/playlisted_songs#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create
# %                     