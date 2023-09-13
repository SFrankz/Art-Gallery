# Art Talks Application

The "Art Talks" application is designed to display an image gallery and a discussion page about each artwork. It provides real-time chat functionality and allows users to explore and discuss different pieces of art.

## Project Structure

The project consists of both a backend server and a frontend Angular application in a single folder. Here's a brief overview of the project structure:

- `/server.js`: Backend server code responsible for serving the image data and WebSocket communication.
- `/src`: Frontend Angular application source code.

## Prerequisites

Before running the application, make sure you have the following dependencies installed on your machine:

- [Node.js](https://nodejs.org/): Required for running the backend server.
- [Angular CLI](https://angular.io/cli): Required for building and running the frontend application.

## Getting Started

Follow these steps to run the "Art Talks" application:

### 1. Start the Backend Server

Open a terminal and navigate to the project folder.

cd /path/to/your/project
Run the Node.js server:

node server.js
The backend server will start and listen on port 8080.

2. Start the Frontend Application
   Open a new terminal (keep the previous terminal with the backend server running) and navigate to the project folder if you're not already there.

cd /path/to/your/project
Run the Angular development server:
ng serve -o

3. Explore "Art Talks"
   You can now access the "Art Talks" application in your web browser at http://localhost:4200.

Features
Gallery Homepage: Browse a list of pictures, filter by name or artist.
Picture Discussion Page: View and discuss specific artworks with real-time chat functionality.
Bonus Feature: Hover over images to see image resolution and size information.
Technologies Used
Backend: Node.js, Express.js, WebSocket
Frontend: Angular
Communication: WebSocket for real-time chat
Data: JSON file for storing picture data
