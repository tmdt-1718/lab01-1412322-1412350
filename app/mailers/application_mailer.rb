class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
  def comment_email(user, blog)
    @user = user
    @blog = blog
    mail(to: @blog.user.email, subject: 'Your Blog has new comment!')
  end
end
