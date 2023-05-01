class Song < ApplicationRecord
  belongs_to :album
  belongs_to :collabartist1
  belongs_to :collabartist2
  belongs_to :collabartist3
end
