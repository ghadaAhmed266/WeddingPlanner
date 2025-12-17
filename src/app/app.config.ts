import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),   
      provideFirebaseApp(() =>
        
      initializeApp({
        apiKey: "AIzaSyC7MTiC1SOnWWDi6-bVOnhCQJ-UN4JFm0s",
        authDomain: "wedding-planner-g.firebaseapp.com",
        projectId: "wedding-planner-g",
        storageBucket: "wedding-planner-g.firebasestorage.app",
        messagingSenderId: "752751508324",
        appId: "1:752751508324:web:506811f9e8a8a421329871"
      })
     
    ),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ]
};