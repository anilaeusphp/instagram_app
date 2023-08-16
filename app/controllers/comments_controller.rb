class CommentsController < ApplicationController
  before_action :set_post, only: %s[create]
  before_action :set_comment, only: %s[destroy]

  def create
    @comment = @post.comment.create(user: current_user, body: params[:comment_body])
  end

  def destroy
    if(@comment.user == current_user)
      @comment.destroy
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end
end