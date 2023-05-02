class Song < ApplicationRecord
  belongs_to :album,
  foreign_key: :album_id,
  class_name: :Album

  # belongs_to :collabartist1,
  # foreign_key: :collabartist1_id,
  # class_name: :Artist

  # belongs_to :collabartist2,
  # foreign_key: :collabartist2_id,
  # class_name: :Artist

  # belongs_to :collabartist3,
  # foreign_key: :collabartist3_id,
  # class_name: :Artist

end
