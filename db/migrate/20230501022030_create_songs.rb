class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null:false
      t.references :album, foreign_key: true, null:false
      t.integer :tracknum, null:false
      t.time :duration, null:false
      t.string :audio_url, null:false

      t.timestamps
    end
    add_index :songs, :title
  end
end
