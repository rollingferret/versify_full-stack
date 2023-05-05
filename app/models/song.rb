class Song < ApplicationRecord
  belongs_to :album,
  foreign_key: :album_id,
  class_name: :Album

  has_one :song_artist,
  through: :album,
  source: :album_artist

  has_many :collab_artists,
  foreign_key: :song_id,
  class_name: :Collab

end
