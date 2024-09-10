import { Routes } from '@angular/router';
import { HomeComponent } from './accueil/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Main page (eagerly loaded)

  { 
    path: 'user/registration', 
    loadComponent: () => import('./utilisateur/registration/registration.component').then(m => m.RegistrationComponent) 
  },
  { 
    path: 'user/login', 
    loadComponent: () => import('./utilisateur/login/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'user/profile', 
    loadComponent: () => import('./utilisateur/profile/profile.component').then(m => m.ProfileComponent) 
  },
  { 
    path: 'user/forgotpassword', 
    loadComponent: () => import('./utilisateur/forgotpassword/forgotpassword.component').then(m => m.ForgotpasswordComponent) 
  },
  { 
    path: 'user/dashboard', 
    loadComponent: () => import('./utilisateur/dashboard/dashboard.component').then(m => m.DashboardComponent) 
  },
  { 
    path: 'garden/upload-garden', 
    loadComponent: () => import('./jardin/uploadgarden/uploadgarden.component').then(m => m.UploadGardenComponent) 
  },
  { 
    path: 'garden/edit/:id', 
    loadComponent: () => import('./jardin/uploadgarden/uploadgarden.component').then(m => m.UploadGardenComponent) 
  },
  { 
    path: 'garden/map-overview', 
    loadComponent: () => import('./jardin/map-overview/map-overview.component').then(m => m.MapOverviewComponent) 
  },
  { 
    path: 'garden/manage-garden', 
    loadComponent: () => import('./jardin/manage-garden/manage-garden.component').then(m => m.ManageGardenComponent) 
  },
  { 
    path: 'garden/share-my-garden', 
    loadComponent: () => import('./jardin/share-my-garden/share-my-garden.component').then(m => m.ShareMyGardenComponent) 
  },
  { 
    path: 'forum/overview', 
    loadComponent: () => import('./forum/overview/overview.component').then(m => m.ForumOverviewComponent) 
  },
  { 
    path: 'forum/create-topic', 
    loadComponent: () => import('./forum/create-topic/create-topic.component').then(m => m.CreateTopicComponent) 
  },
  { 
    path: 'forum/manage-topic', 
    loadComponent: () => import('./forum/manage-topic/manage-topic.component').then(m => m.ManageTopicComponent) 
  },
  { 
    path: 'event/overview', 
    loadComponent: () => import('./événement/overview/overview.component').then(m => m.EventOverviewComponent) 
  },
  { 
    path: 'event/create', 
    loadComponent: () => import('./événement/create/create.component').then(m => m.CreateEventComponent) 
  },
  { 
    path: 'event/manage', 
    loadComponent: () => import('./événement/manage/manage.component').then(m => m.ManageComponent) 
  },
  { 
    path: 'event/edit/:id', 
    loadComponent: () => import('./événement/create/create.component').then(m => m.CreateEventComponent)
  },
  { 
    path: 'forum/topic/:id', 
    loadComponent: () => import('./forum/discussion/discussion.component').then(m => m.DiscussionComponent) 
  },
  { 
    path: 'event/:id', 
    loadComponent: () => import('./événement/details/details.component').then(m => m.EventDetailsComponent) 
  },
  { 
    path: 'garden/:id', 
    loadComponent: () => import('./jardin/garden-details/garden-details.component').then(m => m.GardenDetailsComponent) 
  },
  { 
    path: 'forum/edit-topic/:id', 
    loadComponent: () => import('./forum/create-topic/create-topic.component').then(m => m.CreateTopicComponent) 
  },
  { path: '**', redirectTo: '' } 
];
