class CreatePlaylistedSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :playlisted_songs do |t|
      t.integer :song_id, null: false
      t.integer :playlist_id, null: false
      t.string :timestamps

      t.timestamps
    end

    add_index :playlisted_songs, :song_id
    add_index :playlisted_songs, :playlist_id
  end
end
