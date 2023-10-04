# Use the official Ruby 2.5.1 image
FROM ruby:2.5.1

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in Gemfile
RUN bundle install

# Install Node.js and npm
RUN apt-get update -qq && apt-get install -y nodejs npm

# Install frontend dependencies
WORKDIR /app/frontend
RUN npm install

# Compile React frontend
RUN npm run build

# Switch back to the main app directory
WORKDIR /app

# Expose port 3000 for the app to be accessible
EXPOSE 3000

# Define environment variable for Rails to run in production mode
ENV RAILS_ENV production

# Precompile Rails assets
RUN rails assets:precompile

# Start the Rails server
CMD ["rails", "server", "-b", "0.0.0.0"]
