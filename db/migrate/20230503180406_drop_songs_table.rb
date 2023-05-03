class DropSongsTable < ActiveRecord::Migration[5.2]

  def change
    remove_index :songs, :title
  end

  def change
    drop_table :songs do |t|
      t.string :title, null:false
      t.references :album, foreign_key: true, null:false
      t.integer :tracknum, null:false
      t.time :duration, null:false
      t.string :audio_url, null:false

      t.timestamps
    end
  end
end
