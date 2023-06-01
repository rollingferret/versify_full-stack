class Song < ApplicationRecord
  belongs_to :album,
  foreign_key: :album_id,
  class_name: :Album

  has_one :song_artist,
  through: :album,
  source: :album_artist

  has_many :collabs,
  foreign_key: :song_id,
  class_name: :Collab

  has_many :collab_artists,
  through: :collabs,
  source: :collab_artist

  has_many :playlisted,
  foreign_key: :song_id,
  class_name: :Playlisted

  has_many :playlists,
  through: :playlisted,
  source: :playlist

end
