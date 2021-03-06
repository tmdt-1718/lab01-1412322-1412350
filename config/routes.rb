Rails.application.routes.draw do
  get '/about', to: "static#about"
  get '/error', to: "static#error"

  devise_for :users, :controllers => { :registrations => 'user/registrations', :sessions  => 'user/sessions'}
  devise_for :controllers => {:comments => 'comments'}
  root "users#show"
  resources :albums, only: [:index]  
  resources :blogs, only: [:new, :create, :index, :edit, :update] do
    resources :comments, only: [:create]
  end
  resources :users, only: [ :show, :editpassword, :show] do
    resources :blogs, only: [:show, :index, :edit, :update, :destroy]
    resources :albums, only: [:index, :show, :new, :create, :destroy]  do
      resources :images, only: [:show, :index, :new, :create, :destroy]      
    end
    collection do
      get 'editpassword'
      put 'updatepassword'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
