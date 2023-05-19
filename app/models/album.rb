# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  artist_id  :bigint           not null
#  year       :integer          not null
#  genre      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord
  validates :title, presence:true
  validates :year, presence:true
  validates :genre, presence:true
  validates :artist_id, presence:true

  belongs_to :album_artist,
  foreign_key: :artist_id,
  class_name: :Artist

  has_many :tracks,
  foreign_key: :album_id,
  class_name: :Song
  
end
