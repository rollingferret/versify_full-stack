# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: 'userdemo', email: 'userdemo', birthday: 19900101, password: 'userdemo')

Playlist.create(title: 'My First Playlist', description: "I'm so excited", user_id: 1)

Playlist.create(title: 'NYC Go Easy On Me', description: "Splitscreen Sadness", user_id: 1)

Playlist.create(title: 'Splitscreen Sadness', description: "Splitscreen Sadness", user_id: 1)