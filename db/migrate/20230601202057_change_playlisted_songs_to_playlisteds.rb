class ChangePlaylistedSongsToPlaylisteds < ActiveRecord::Migration[5.2]
  def change
    rename_table :playlisted_songs, :playlisteds
  end
end
