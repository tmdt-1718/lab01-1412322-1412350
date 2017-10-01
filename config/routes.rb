Rails.application.routes.draw do
  get '/about', to: "static#about"

  devise_for :users, :controllers => { :registrations => 'user/registrations' }
  root "users#show"

  resources :users, only: [ :show, :editpassword ] do
    collection do
      get 'editpassword'
      put 'updatepassword'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
