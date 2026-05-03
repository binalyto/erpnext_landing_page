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

export const trackSection = (sectionName) => {
  logEvent(analytics, 'section_view', {
    section_id: sectionName,
  });
};

export const trackClick = (buttonId, page = 'edtech') => {
  logEvent(analytics, 'button_click', {
    button_id: buttonId,
    page,
  });
};

// Fires a Google Ads conversion event. gtag is loaded globally via index.html.
export const trackGadsConversion = () => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion_event_default');
};