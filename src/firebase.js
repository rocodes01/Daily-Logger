import firebase from "firebase";
let firebaseConfig = {
  apiKey: "AIzaSyAIhpB0kjvwTO3hb8rDGpnIGNVYKBWb9MA",
  authDomain: "daily-logger-d118.firebaseapp.com",
  projectId: "daily-logger-d118",
  storageBucket: "daily-logger-d118.appspot.com",
  messagingSenderId: "603975924303",
  appId: "1:603975924303:web:4190d5464e73412d5e083a",
  measurementId: "G-9LXD3Y1SXL",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
