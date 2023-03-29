class AddPhotoUrlToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :photo_url, :string

    add_index :albums, :photo_url
  end
end
