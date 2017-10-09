class CommentsController < ApplicationController
    def create
        @comment = Comment.new(content: params[:comment][:content], user: current_user, blog_id: params[:blog_id])
        if @comment.save 
          ApplicationMailer.comment_email(current_user, @comment.blog).deliver_later
          redirect_to user_blog_url(current_user, @comment.blog), notice: "Add comment successfully!"
        else
            redirect_to user_blog_url(current_user, @comment.blog), alert: @comment.errors.full_messages[0]            
        end
    end
end
