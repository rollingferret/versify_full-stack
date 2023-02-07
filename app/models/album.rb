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
  validates :title, presence:true

  belongs_to :album_artist,
  foreign_key: :artist_id,
  class_name: :Artist
  
end
