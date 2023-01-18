class RemovePlaylistTitleUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index :playlists, :title
    add_index :playlists, :title
  end
end
