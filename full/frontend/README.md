# Frontend for Interactive 3D Product Viewer

## Overview

This is the frontend application for the Interactive 3D Product Viewer. It is built using Vue.js and allows users to view, add, and manage 3D product models. The frontend communicates with the backend API to fetch and manipulate data. The 3D models are rendered using iframes that embed Sketchfab models.

## Technologies Used

- Vue.js: JavaScript framework for building user interfaces.
- Vuex: State management pattern + library for Vue.js applications.
- Vue Router: Official router for Vue.js for single-page applications.
- BootstrapVue: Bootstrap v4 components and grid system for Vue.js.

## Setup and Configuration

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**:
   git clone https://github.com/laserfrate/interactive-3d-product-viewer.git
   cd interactive-3d-product-viewer/frontend





Install dependencies:
npm install



Running the Application
Start the development server:

npm run serve



Access the application:
Open your browser and navigate to http://localhost:8080.



Project Structure

frontend/
├── public/                     # Public assets and index.html
├── src/                        # Main source directory
│   ├── assets/                 # Static assets
│   ├── components/             # Vue components
│   ├── store/                  # Vuex store modules
│   ├── views/                  # Vue views (pages)
│   ├── App.vue                 # Main Vue component
│   └── main.js                 # Entry point for the application
├── package.json                # Node.js dependencies and scripts
└── vue.config.js               # Vue CLI configuration


How It Works
Rendering 3D Models
Using iframes:

The 3D models are rendered using iframes that embed models from Sketchfab. This is done by including the embed URL of the Sketchfab model in the iframe's src attribute.




Possible Future Enhancements with Three.js:

In the future, the application could be enhanced to use Three.js for rendering 3D models directly within the Vue components. This would allow for more flexibility and customization of the 3D model rendering and interaction.


Vuex is used for state management. The state includes products and user information. Actions and mutations are defined to fetch products from the backend and update the state accordingly.

Routing
Vue Router is used to handle navigation within the application. Routes are defined to load different views based on the URL.

Adding 3D Models
Users can add new 3D models by entering embed codes in the form provided. These embed codes are validated and sent to the backend API to be stored.