class AlbumsController < ApplicationController
  before_action :has_permission_to_do_action, only: [:destroy]
  before_action :authenticate_user!
  def index
    @albums = Album.all
  end
  def show
    @album = Album.find(params[:id])
    @images = @album.images
  end
  def new
    @album = Album.new
    @image = Image.new
  end
  def create
      @image = Image.new(url: params[:album][:image][:url], user: current_user, view: 0)
      @album = Album.new(name: params[:album][:name], totalview: 0, user: current_user, imgcover: @image.url.url)
      if @album.save
        @image.album = @album
        if @image.save
          @album.update(imgcover: @image.url.thumb.url)
          redirect_to user_albums_url(current_user), notice: "Add album successfully!"
        else
          redirect_to new_user_album_image_url(user: current_user, album: @album), alert: @image.errors.full_messages[0]
        end        
      else
        redirect_to new_user_album_url(user: current_user), alert: @album.errors.full_messages[0]
      end 
  end
  def destroy  
    @album = Album.find(params[:id])
    @album.destroy
    redirect_to albums_url
  end
  private
  def has_permission_to_do_action
    @album = Album.find(params[:id])
    if @album.user != current_user
      redirect_to error_url, alert: "You don't have permisstion to do this action!"
    end
  end
end
