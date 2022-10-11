import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
apiKey: "AIzaSyBsi5nooK0lvYo2EJ6GVonpx4ABwnycxFk",
  authDomain: "projeto-58-d21ad.firebaseapp.com",
  databaseURL: "https://projeto-58-d21ad-default-rtdb.firebaseio.com",
  projectId: "projeto-58-d21ad",
  storageBucket: "projeto-58-d21ad.appspot.com",
  messagingSenderId: "905128016721",
  appId: "1:905128016721:web:5559678aadd9456c353170",
  measurementId: "G-7G7CYKKFF5"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();