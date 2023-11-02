Rails.application.routes.draw do
  devise_for :users

  root to: 'storefront#index'

  concern :seeds_queries do
    get "seeds/most-recent(/:offset)", to: "seeds#most_recent"
  end

  namespace :v1 do
    concerns :seeds_queries
  end
end
