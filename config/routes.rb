Rails.application.routes.draw do
  get '/about', to: "static#about"
  get '/error', to: "static#error"

  devise_for :users, :controllers => { :registrations => 'user/registrations' }
  root "users#show"
  resources :images, only: [:destroy]
  resources :albums, only: [:index, :destroy]  
  resources :blogs, only: [:new, :create, :destroy, :index]
  resources :users, only: [ :show, :editpassword ] do
    resources :blogs, only: [:show, :index]
    resources :albums, only: [:index, :show, :new, :create]  do
      resources :images, only: [:show, :index, :new, :create]      
    end
    collection do
      get 'editpassword'
      put 'updatepassword'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
