import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideFirebaseApp(() =>
      initializeApp({
        "projectId": "ng-task-18-6bb44",
        "appId": "1:551065867154:web:6191b38bf27cd5cc6ce74b",
        "storageBucket": "ng-task-18-6bb44.firebasestorage.app",
        "apiKey": "AIzaSyAQFj8bk53UnjX82WKJFqQi0eMqpg1k5f0",
        "authDomain": "ng-task-18-6bb44.firebaseapp.com",
        "messagingSenderId": "551065867154",
        "measurementId": "G-GJVTE7QYB5"
      })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())]
};
