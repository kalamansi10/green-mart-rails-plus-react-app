class V1::SeedsController < ApplicationController
  def most_recent
    offset = params[:offset]
    render json: Seed.order(created_at: :desc)
                     .offset((offset unless !offset))
                     .limit(12)
  end
  def search
    keyword = params[:keyword].downcase || ""
    offset = params[:offset]
    render json: Seed.where("tags LIKE ?", "%" + params[:keyword] + "%")
                     .offset((offset unless !offset))
                     .limit(12)
  end
  def active_banners
    render json: Banner.where(is_active?: true)
  end
end
