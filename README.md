# UrbanRoots

UrbanRoots is an Angular-based web application designed to promote and facilitate urban gardening within communities. The platform empowers users to discover and connect with local gardens, participate in gardening events, and engage in discussions through a dedicated forum. UrbanRoots aims to foster community collaboration, improve urban sustainability, and raise awareness of eco-responsibility.

---

## Visual Tour

### 1. Homepage
![Homepage](path_to_screenshot/homepage.png)
*The homepage of UrbanRoots showcasing the platform's key features.*

### 2. Garden Management
![Garden Management](path_to_screenshot/garden_management.png)
*Managing gardens within UrbanRoots.*

### 3. Add Event
![Event](path_to_screenshot/resources.png)
*Users can share and borrow gardening tools in the Resources section.*

### 4. Forum
![Forum](path_to_screenshot/forum.png)
*Community forum where users discuss eco-friendly gardening tips.*

### User Login
![User Login](path_to_screenshot/user_login.png)
*User login page with secure authentication using Supabase.*
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
  ```
  ### Installation



1. Clone the Repository:
```bash
git clone https://github.com/yourusername/urbanroots.git
```

2. Navigate to the project directory:
```bash
cd urbanroots
```
3. Install Dependencies:
```bash
npm install
````

4. Set Up Firebase:
- Create a Firebase project from the Firebase Console.
- Add your Firebase config to src/environments/environment.ts:
```ts
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "your-api-key",
    authDomain: "your-app-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-app-id.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
  },
};
```
5.Serve the App:
```bash
ng serve
```
 
## Firebase Setup
To make full use of Firebase services (Authentication, Firestore, and Storage):

- Enable Authentication (Email/Password) in Firebase.
- Create a Firestore database and define access rules.
- Enable Firebase Storage to store user-uploaded images.
- Set up Firebase Hosting to deploy the app globally.
- Deployment
To deploy the app on Firebase Hosting, follow these steps:
```bash
ng build --prod
firebase deploy```
This will build the production version of the Angular app and deploy it to Firebase Hosting.


```

