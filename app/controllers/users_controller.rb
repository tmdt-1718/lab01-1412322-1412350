class UsersController < ApplicationController
    before_action :authenticate_user!
    def show
        @user = current_user
    end

    def editpassword
        @user = current_user
    end

    def updatepassword
        n_password = params[:user][:password]
        cf_password = params[:user][:password_confirmation]
        cr_password = params[:user][:current_password]
        @user = User.find(current_user.id)
        if @user.valid_password?(cr_password) 
            if cf_password == n_password
                if @user.update(password: n_password)
                    bypass_sign_in @user
                    redirect_to '/users/edit'
                else
                    redirect_to '/users/editpassword', alert: @user.errors.full_messages[0]
                end
            else
                redirect_to '/users/editpassword', alert: "Confirm password doesn't match!"               
            end
        else
            redirect_to '/users/editpassword', alert: "Invalid current password!"          
        end
    end
end
