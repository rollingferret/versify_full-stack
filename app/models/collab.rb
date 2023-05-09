class Collab < ApplicationRecord

    belongs_to :collab_artist,
    foreign_key: :artist_id,
    class_name: :Artist

    belongs_to :collab,
    foreign_key: :song_id,
    class_name: :Song
end
