Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# namespace :api, defaults: {format: :json} do
#   resources :users, only: [:create] do
#     resources :playlists, only: [:index, :create, :update, :destroy]
#   end
#   resources :playlists, only: [:show]
#   resource :session, only: [:create, :destroy]
# end

namespace :api, defaults: {format: :json} do
  resources :users, only: [:create]
  resources :playlists, only: [:index, :show, :create, :update, :destroy]
  resource :session, only: [:create, :destroy]
end
  
  root 'static_pages#root'
end

# currentUser is a special instance, where it can be accessed everywhere so you don't have to pass it as an argument
# /Users/EtaCarinaePrima/Dropbox/aabootcamp/versify_fullstack NESTED
#                    Prefix Verb   URI Pattern                                            Controller#Action
#        api_user_playlists GET    /api/users/:user_id/playlists(.:format)                api/playlists#index {:format=>:json}
#                           POST   /api/users/:user_id/playlists(.:format)                api/playlists#create {:format=>:json}
#         api_user_playlist PATCH  /api/users/:user_id/playlists/:id(.:format)            api/playlists#update {:format=>:json}
#                           PUT    /api/users/:user_id/playlists/:id(.:format)            api/playlists#update {:format=>:json}
#                           DELETE /api/users/:user_id/playlists/:id(.:format)            api/playlists#destroy {:format=>:json}
#                 api_users POST   /api/users(.:format)                                   api/users#create {:format=>:json}
#              api_playlist GET    /api/playlists/:id(.:format)                           api/playlists#show {:format=>:json}
#               api_session DELETE /api/session(.:format)                                 api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                 api/sessions#create {:format=>:json}
#                      root GET    /static_pages#root                                     static_pages#root


# /Users/EtaCarinaePrima/Dropbox/aabootcamp/versify_fullstack NOT NESTED

#                    Prefix Verb   URI Pattern                                Controller#Action
#                 api_users POST   /api/users(.:format)                         api/users#create {:format=>:json}
#             api_playlists GET    /api/playlists(.:format)                     api/playlists#index {:format=>:json}
#                           POST   /api/playlists(.:format)                     api/playlists#create {:format=>:json}
#              api_playlist GET    /api/playlists/:id(.:format)                 api/playlists#show {:format=>:json}
#                           PATCH  /api/playlists/:id(.:format)                 api/playlists#update {:format=>:json}
#                           PUT    /api/playlists/:id(.:format)                 api/playlists#update {:format=>:json}
#                           DELETE /api/playlists/:id(.:format)                 api/playlists#destroy {:format=>:json}
#               api_session DELETE /api/session(.:format)                       api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                       api/sessions#create {:format=>:json}
#                      root GET    /                                            static_pages#root