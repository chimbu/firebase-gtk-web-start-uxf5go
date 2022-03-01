// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import { getAuth, EmailAuthProvider } from 'firebase/auth';

import {} from 'firebase/firestore';

import {} from 'firebase/auth';
import {} from 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
  // Add Firebase project configuration object here

  // Your web app's Firebase configuration

  // Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyD0fT6t3T1Ni8NzEvbO52opvgQ3Bo8ev4U",

  authDomain: "fir-web-codelab-cc1d4.firebaseapp.com",

  projectId: "fir-web-codelab-cc1d4",

  storageBucket: "fir-web-codelab-cc1d4.appspot.com",

  messagingSenderId: "161481935409",

  appId: "1:161481935409:web:9794660d3626fcb020a310"

};



  // Initialize Firebase

  //const app = initializeApp(firebaseConfig);
  initializeApp(firebaseConfig);
  auth = getAuth();

  //CA  const firebaseConfig = {};

  // initializeApp(firebaseConfig);

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

  // const ui = new firebaseui.auth.AuthUI(auth);
  const ui = new firebaseui.auth.AuthUI(auth);
  // Listen to RSVP button clicks
  startRsvpButton.addEventListener('click', () => {
    //console.log('click');
    ui.start('#firebaseui-auth-container', uiConfig);
  });

  //console.log('start');
}
main();
