Rails.application.routes.draw do
  get '/about', to: "static#about"

  devise_for :users, :controllers => { :registrations => 'user/registrations' }
  root "users#show"

  resources :blogs, only: [:new, :create]
  resources :users, only: [ :show, :editpassword ] do
    resources :blogs, only: [:show, :index]
    collection do
      get 'editpassword'
      put 'updatepassword'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
