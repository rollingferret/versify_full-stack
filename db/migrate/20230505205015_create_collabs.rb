class CreateCollabs < ActiveRecord::Migration[5.2]
  def change
    create_table :collabs do |t|
      t.integer :song_id, null:false
      t.integer :artist_id, null:false

      t.timestamps
    end
    add_index :collabs, :song_id
    add_index :collabs, :artist_id
    add_index :collabs, [:song_id, :artist_id], unique: true
  end
end
