# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  photo_url  :string
#
class Artist < ApplicationRecord
    validates :name, presence:true

    has_one_attached :photo

    has_many :albums,
    foreign_key: :artist_id,
    class_name: :Album

end
