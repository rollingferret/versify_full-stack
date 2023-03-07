class AddIndexToPlaylistsUpdatedAt < ActiveRecord::Migration[5.2]
  def change
    add_index :playlists, :updated_at
  end
end
