class AddPhotoUrlToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :photo_url, :string
    
    add_index :artists, :photo_url
  end
end
