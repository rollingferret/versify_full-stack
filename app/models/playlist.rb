# == Schema Information
#
# Table name: playlists
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Playlist < ApplicationRecord    
    validates :title, presence: true
    validates :description, presence: true
    validates :user_id, presence: true

    has_many :playlisted_songs, dependent: :destroy,
    foreign_key: :playlist_id,
    class_name: :PlaylistedSong

    has_many :playlist_songs,
    through: :playlisted_songs,
    source: :song
    

    # belongs_to :user,
    #     primary_key: :id, 
    #     foreign_key: :song_id,
    #     class_name: :Song
end
