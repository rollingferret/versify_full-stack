# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# Linking images from S3 (https://stackoverflow.com/questions/55027846/how-to-seed-database-from-s3-in-a-ror-app)
# require 'faker'
# require 'aws-sdk-s3' 

# s3 = Aws::S3::Resource.new(region: 'us-west-2') # Change this to your region

# Item.destroy_all

# 20.times do |i|
#     item = Item.create!(
#                     title: Faker::Games::Pokemon.name,
#                     description: Faker::Lorem.paragraph_by_chars(60, false),
#                     price: 5.0)

#     # Create the object to retrieve
#     obj = s3.bucket('my-bucket').object('#{i}.jpg')    # change this to your bucket name

#     # Get the item's content and save it to local
#     obj.get(response_target: 'app/assets/images/chatons/#{i}.jpg')

#     item.image.attach(io: File.open("app/assets/images/chatons/#{i}.jpg"), filename: "#{i}.jpg")

# end

require 'open-uri'

User.create(username: 'userdemo', email: 'userdemo', birthday: 19900101, password: 'userdemo')

Playlist.create(title: 'My First Playlist', description: "I'm so excited", user_id: 1)

Playlist.create(title: 'NYC Go Easy On Me', description: "My love for Alicia Keys", user_id: 1)

Playlist.create(title: 'Splitscreen Sadness', description: "When the sadness is sad.", user_id: 1)

Artist.create(name: 'Juls')
Artist.create(name: 'Haile')
Artist.create(name: 'Sauti Sol')
Artist.create(name: 'Wizkid')
Artist.create(name: 'JAEL')
Artist.create(name: 'Jhene Aiko')
Artist.create(name: 'John Legend')
Artist.create(name: 'Koffee')
Artist.create(name: 'Alicia Keys')
Artist.create(name: 'Tems')
Artist.create(name: 'Burna Boy', photo_url: 'https://versify-dev.s3.amazonaws.com/tWhDiQxdhCSxZEETa5xELH7i')
# artist = Artist.create(name: 'Burna Boy')
# artist.photo.attach(
#     io: File.open('https://versify-dev.s3.amazonaws.com/tWhDiQxdhCSxZEETa5xELH7i'),
#     filename: 'avatar-burna-boy.pdf',
#     content_type: 'image/pdf',
#     identify: false,
# )

    

Album.create(title: 'Sounds of My World', year: 2021, artist_id: 1, genre: 'Afrobeats')
Album.create(title: 'Time', year: 2018, artist_id: 5, genre: 'R&B')
Album.create(title: 'Trip', year: 2017, artist_id: 7, genre: 'R&B')
Album.create(title: 'Bigger Love', year: 2020, artist_id: 8, genre: 'R&B')
Album.create(title: 'Rapture EP', year: 2019, artist_id: 9, genre: 'Dancehall')
Album.create(title: 'KEYS', year: 2021, artist_id: 10, genre: 'R&B')
Album.create(title: 'For Broken Ears', year: 2020, artist_id: 11, genre: 'R&B')
Album.create(title: 'Made In Lagos', year: 2020, artist_id: 4, genre: 'Afrobeats')
Album.create(title: 'Twice As Tall', year: 2020, artist_id: 12, genre: 'Afrobeats')