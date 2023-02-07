class ReAddAlbumsWithNullFalseConstraintOnYearAndGenre < ActiveRecord::Migration[5.2]
  
  def change
    remove_index :albums, [:artist_id, :title], unique: true
  end

  def change
    drop_table :albums do |t|
      t.string :title, null:false
      t.references :artist, foreign_key: true, null:false
      t.integer :year
      t.string :genre
    
      t.timestamps
    end
  end
end

