class BlogsController < ApplicationController
  def index
    @blogs = Blog.all
  end
  def show
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
  def destroy  
    @blog = Blog.find(params[:id])
    @blog.destroy
    redirect_to blogs_url
  end
end
