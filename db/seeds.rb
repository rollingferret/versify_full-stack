# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'
User.create(username: 'userdemo', email: 'userdemo', birthday: 19900101, password: 'userdemo')

Playlist.create(title: 'My First Playlist', description: "I'm so excited", user_id: 1)
Playlist.create(title: 'NYC Go Easy On Me', description: "My love for Alicia Keys", user_id: 1)
Playlist.create(title: 'Splitscreen Sadness', description: "When the sadness is sad.", user_id: 1)

artists = [
    'Juls', 
    'Haile', 
    'Sauti Sol', 
    'Wizkid', 
    'JAEL', 
    'Jhene Aiko', 
    'John Legend', 
    'Koffee', 
    'Alicia Keys', 
    'Tems', 
    'Burna Boy'
]
artist_photos = [
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-juls.jpeg",
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-haile.jpeg",
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-sauti-sol.jpeg",
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-wizkid.jpeg",
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-jael.jpeg",
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-jhene-aiko.jpeg",
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-john-legend.jpeg",
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-koffee.jpeg",
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-alicia-keys.jpeg",
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-tems.jpeg",
    "https://versify-dev.s3.amazonaws.com/images/artists/avatar-burna-boy.jpeg",
]

# Seed artists in the database with corresponding image url
# Then create Artist instances and attach their artist photo
(0... artists.length).each do |i|
    artist = Artist.create(name: artists[i], photo_url: artist_photos[i])
    artist.photo.attach(
        io: URI.open(artist_photos[i]),
        filename: 'avatar-'+ artists[i].downcase().split(' ').join('-'),
        content_type: 'image/jpeg',
    )
end

albums = [
    {title: 'Sounds of My World', year: 2021, artist_id: 1, genre: 'Afrobeats'},
    {title: 'Time', year: 2018, artist_id: 5, genre: 'R&B'},
    {title: 'Trip', year: 2017, artist_id: 7, genre: 'R&B'},
    {title: 'Bigger Love', year: 2020, artist_id: 8, genre: 'R&B'},
    {title: 'Rapture EP', year: 2019, artist_id: 9, genre: 'Dancehall'},
    {title: 'KEYS', year: 2021, artist_id: 10, genre: 'R&B'},
    {title: 'For Broken Ears', year: 2020, artist_id: 11, genre: 'R&B'},
    {title: 'Made In Lagos', year: 2020, artist_id: 4, genre: 'Afrobeats'},
    {title: 'Twice As Tall', year: 2020, artist_id: 12, genre: 'Afrobeats'},
]
albums.each { |album| Album.create(album)}
