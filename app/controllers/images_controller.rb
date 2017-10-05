class ImagesController < ApplicationController
  def index
    @images = Image.all
  end
  def show
    @image = Image.find(params[:id])
    @image.view += 1
    @image.save 
  end
  def new
    @image = Image.new
  end
  def create
    @image = Image.new(url: params[:image][:url], user: current_user, view: 0, album_id: params[:album_id])
    if @image.save
      redirect_to user_album_url(current_user, params[:album_id]), notice: "Add successfully!"
    else
      redirect_to new_album_image_url, alert: @image.errors.full_messages[0]
    end
  end
end
