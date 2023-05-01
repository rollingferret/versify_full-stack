class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null:false
      t.references :album, foreign_key: true, null:false
      t.references :collabartist1, foreign_key: true
      t.references :collabartist2, foreign_key: true
      t.references :collabartist3, foreign_key: true
      t.integer :tracknum, null:false
      t.time :duration, null:false
      t.string :audio_url, null:false

      t.timestamps
    end
    add_index :songs, :title
    add_index :songs, :collabartist1
    add_index :songs, :collabartist2
    add_index :songs, :collabartist3
  end
end
