Rails.application.routes.draw do
  devise_for :users

  root to: "store#homepage"
  get "/results", to: "store#resultspage"

  concern :seeds_queries do
    get "/seeds/most-recent(/:offset)", to: "seeds#most_recent"
    get "/seeds/search", to: "seeds#search"
    get "/seeds/active-banners", to: "seeds#active_banners"
  end

  namespace :v1 do
    concerns :seeds_queries
  end
end
