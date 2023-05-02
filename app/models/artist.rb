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

    # has_one :collab1,
    # foreign_key: :collabartist1_id,
    # class_name: :Song

    # has_one :collab2,
    # foreign_key: :collabartist2_id,
    # class_name: :Song

    # has_one :collab3,
    # foreign_key: :collabartist3_id,
    # class_name: :Song

end
