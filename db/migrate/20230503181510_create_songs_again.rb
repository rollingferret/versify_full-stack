class CreateSongsAgain < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null:false
      t.references :album, foreign_key: true, null:false
      t.integer :tracknum, null:false
      t.integer :duration, null:false
      t.string :audio_url, null:false
    end
    add_index :songs, :title
  end
end
