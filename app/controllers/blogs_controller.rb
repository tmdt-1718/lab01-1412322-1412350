class BlogsController < ApplicationController
  before_action :has_permission_to_do_action, only: [:edit, :update, :destroy]
  respond_to :html, :js
  def index
    @comment = Comment.new
    @blogs = Blog.all
  end
  def show
    @comment = Comment.new
    @blog = Blog.find(params[:id])
    @blog.view += 1
    @blog.save 
  end
  def new
    @blog = Blog.new
  end
  def create
    @blog = Blog.new(tittle: params[:blog][:tittle], imgcover: params[:blog][:imgcover], content: params[:blog][:content], user: current_user, view: 0)
    if @blog.save 
      redirect_to user_blogs_url(current_user), notice: "Add successfully!"
    else
      redirect_to new_blog_url, alert: @blog.errors.full_messages[0]
    end
  end
  def edit
  end
  def update
    tittle = params[:blog][:tittle]
    content = params[:blog][:content]
    imgcover = params[:blog][:imgcover]
    if imgcover
      if @blog.update(tittle: tittle, content: content, imgcover: imgcover)
        redirect_to user_blog_url(current_user, @blog), notice: "Updated blog!"
      else
        redirect_to edit_user_blog_url(current_user, @blog), alert: @blog.errors.full_messages[0]
      end
    else
      if @blog.update(tittle: tittle, content: content)
        redirect_to user_blog_url(current_user, @blog), notice: "Updated blog!"
      else
        redirect_to edit_user_blog_url(current_user, @blog), alert: @blog.errors.full_messages[0]
      end
    end
  end
  def destroy  
    @blog.destroy
    redirect_to blogs_url
  end
  private
  def has_permission_to_do_action
    @blog = Blog.find(params[:id])
    if @blog.user != current_user
      redirect_to error_url, alert: "You don't have permisstion to do this action!"
    end
  end
end
