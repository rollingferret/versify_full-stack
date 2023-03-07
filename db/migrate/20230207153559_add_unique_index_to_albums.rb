class AddUniqueIndexToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_index :albums, [:artist_id, :title], unique: true
  end
end
