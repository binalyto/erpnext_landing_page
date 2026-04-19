// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDm9r5medfsBS0Q_TC0U4xYkQXPRlArRck",
  authDomain: "erpnext-landing-page.firebaseapp.com",
  projectId: "erpnext-landing-page",
  storageBucket: "erpnext-landing-page.firebasestorage.app",
  messagingSenderId: "217962432000",
  appId: "1:217962432000:web:068f662b23f7c6b5c83ae5",
  measurementId: "G-PC94TJFBBH"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Helper function to keep your component code clean
export const trackSection = (sectionName) => {
  logEvent(analytics, 'section_view', {
    section_id: sectionName
  });
};