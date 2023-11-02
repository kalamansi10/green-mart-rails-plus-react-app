class V1::SeedsController < ApplicationController
  def most_recent
    offset = params[:offset]
    render json: Seed.order(created_at: :desc)
                     .offset((offset unless !offset))
                     .limit(12)
  end
end
