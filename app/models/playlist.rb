class Playlist < ApplicationRecord    
    validates :title, presence: true
    validates :description, presence: true

    # has_many :songs

    # belongs_to :user,
    #     primary_key: :id, 
    #     foreign_key: :song_id,
    #     class_name: :Song
end
