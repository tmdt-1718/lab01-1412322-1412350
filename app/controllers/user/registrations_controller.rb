class User::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path
    else
      redirect_to new_user_session_path
    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  def update
    dob = params[:user][:dob]
    name = params[:user][:name]
    n_password = params[:user][:password]
    cf_password = params[:user][:password_confirmation]
    cr_password = params[:user][:current_password]
    @user = User.find(current_user.id)
    if @user.valid_password?(cr_password) 
        if @user.update(dob: dob, name: name)
          redirect_to '/users/edit'
        else
          redirect_to '/users/edit', notice: @user.errors.full_messages[0]
        end
      else
        redirect_to '/users/edit', notice: "Wrong password"     
    end
  end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
  private
    def user_params
      params.require(:user).permit(:email, :dob, :password, :name, :password_confirmation)
    end
    def user_editpassword_params
      params.require(:user).permit(:email, :dob, :password, :name, :password_confirmation)
    end
end
