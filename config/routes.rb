Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
  resources :users, only: [:create]
    resources :playlists, only: [:index, :create, :edit, :update, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
  
  root 'static_pages#root'
end

# Prefix Verb   URI Pattern                                                                              Controller#Action
# api_users         POST   /api/users(.:format)                                 api/users#create {:format=>:json}
# api_playlists     GET    /api/playlists(.:format)                         api/playlists#index {:format=>:json}
#                   POST   /api/playlists(.:format)                             api/playlists#create {:format=>:json}
# edit_api_playlist GET    /api/playlists/:id/edit(.:format)            api/playlists#edit {:format=>:json}
# api_playlist      GET    /api/playlists/:id(.:format)                      api/playlists#show {:format=>:json}
#                   PATCH  /api/playlists/:id(.:format)                         api/playlists#update {:format=>:json}
#                   PUT    /api/playlists/:id(.:format)                         api/playlists#update {:format=>:json}
#                   DELETE /api/playlists/:id(.:format)                         api/playlists#destroy {:format=>:json}
# api_session       DELETE /api/session(.:format)                             api/sessions#destroy {:format=>:json}
#                   POST   /api/session(.:format)                               api/sessions#create {:format=>:json}
# root             GET    /                                                    static_pages#root