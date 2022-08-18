# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  birthday        :date             not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password
    before_create :ensure_session_token
    
    validates :username, presence: true, uniqueness: true,
        format: { without: /\s/, message: "- Spaces not allowed" }
    validates :email, presence: true, uniqueness: true, 
        confirmation: {message: '- Emails do not match'}
    validates :birthday, presence: true
    validates :password, length: {minimum: 8, allow_nil:true},  
        confirmation: {message: '- Passwords do not match'}
    # validates :email_confirmation, presence: true
    # validates :password_confirmation, presence: true
    

    def User.find_by_credentials(username,password)        
        @user = User.find_by(username: username)
        if @user && @user.is_password?(password)
            @user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        pw_object = BCrypt::Password.new(self.password_digest)
        pw_object.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

end
