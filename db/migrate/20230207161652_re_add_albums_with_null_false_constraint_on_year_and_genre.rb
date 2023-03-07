class ReAddAlbumsWithNullFalseConstraintOnYearAndGenre < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null:false
      t.references :artist, foreign_key: true, null:false
      t.integer :year, null:false
      t.string :genre, null:false
    
      t.timestamps
    end

    add_index :albums, [:artist_id, :title], unique: true
  end
end
