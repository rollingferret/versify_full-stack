class AddAlbumImageUrlColumnToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :album_image_url, :string, null: false
  end
end
