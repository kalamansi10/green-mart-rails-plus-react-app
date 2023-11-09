class V1::SeedsController < ApplicationController
  def most_recent
    offset = params[:offset]
    render json: Seed.order(created_at: :desc)
                     .offset((offset unless !offset))
                     .limit(12)
  end
  def search
    keyword = params[:keyword].downcase
    offset = params[:offset]
    render json: seed_filter.where("tags LIKE ?", "%" + keyword + "%")
                     .offset((offset unless !offset))
                     .limit(12)
  end

  def active_banners
    render json: Banner.where(is_active?: true)
  end

  private

  def seed_filter
    filtered_seed = Seed
    return filtered_seed if !params[:filter]
    params[:filter].each do |k, v|
      filtered_seed = filtered_seed.where(k => v)
    end
    filtered_seed
  end

end
