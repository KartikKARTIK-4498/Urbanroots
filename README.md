# UrbanRoots

UrbanRoots is an Angular-based web application designed to promote and facilitate urban gardening within communities. The platform empowers users to discover and connect with local gardens, participate in gardening events, and engage in discussions through a dedicated forum. UrbanRoots aims to foster community collaboration, improve urban sustainability, and raise awareness of eco-responsibility.

---

## Features

### User Management
- **Registration/Login**: Create an account and log in using email and password.
- **Profile Management**: Update names, upload profile pictures, and track personal activity (gardens created, events participated).
- **Dashboard**: Access personalized user dashboards to quickly view relevant information like gardens and events.

### Gardens Management
- **Interactive Map**: Use Leaflet to explore and discover nearby gardens, with filter options like distance and type.
- **Add/Edit/Delete Gardens**: Users can create new gardens, add descriptions, upload images, and manage existing gardens.
- **View Garden Details**: See garden details such as name, location, size, and images.

### Event Management
- **Create/Manage Events**: Organize gardening events, workshops, and gatherings, or edit/delete existing events.
- **Participate in Events**: Join events and track participation via the event management interface.
- **Event Listings**: Browse through upcoming events and join those of interest.

### Forum (Blogs)
- **Create/Edit Topics**: Start discussions on gardening, sustainability, and community topics.
- **Threaded Discussions**: Reply to posts, engage with the community, and build collaborative discussions.

---

## Tech Stack

### Frontend
- **Angular 18**: Dynamic and modular web application framework.
- **Tailwind CSS/Daisy UI**: Utility-first CSS framework for quick and easy styling.
- **Leaflet**: JavaScript library for building interactive maps.
- **Swiper.js**: For creating image carousels in the garden and event detail pages.

### Backend
- **Firebase Authentication**: Secure email/password authentication.
- **Firestore (NoSQL Database)**: Stores user data, gardens, events, and forum posts.
- **Firebase Storage**: Upload and store images and media files.
- **Firebase Hosting**: Hosting the Angular application with SSL support and CDN.

---

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed. Download from [here](https://nodejs.org/en/).
- **Angular CLI**: Install Angular CLI globally:
  ```bash
  npm install -g @angular/cli
