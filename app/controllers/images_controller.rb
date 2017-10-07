class ImagesController < ApplicationController
  before_action :has_permission_to_do_action, only: [:new, :destroy, :create]
  def index
    @images = Image.all
  end
  def show
    @image = Image.find(params[:id])
    @image.view += 1
    @image.save 
    @image.album.totalview += 1
    @image.album.save
  end
  def new
    @image = Image.new
  end
  def create
    @image = Image.new(url: params[:image][:url], user: current_user, view: 0, album_id: params[:album_id])
    if @image.save
      redirect_to user_album_url(current_user, params[:album_id]), notice: "Add successfully!"
    else
      redirect_to new_user_album_image_url, alert: @image.errors.full_messages[0]
    end
  end
  def destroy  
    @image = Image.find(params[:id])
    @album = @image.album
    @album.totalview -= @image.view
    @album.save
    @image.destroy
    redirect_to user_album_url(current_user, @album)
  end
  private
  def has_permission_to_do_action
    @album = Album.find(params[:album_id])
    if @album.user != current_user
      redirect_to error_url, alert: "You don't have permisstion to do this action!"
    end
  end
end
