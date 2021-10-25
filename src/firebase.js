import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChFE1vS12_DgnomyCBjw6O87ChOMJxIQY",
  authDomain: "j-clone-5288c.firebaseapp.com",
  projectId: "j-clone-5288c",
  storageBucket: "j-clone-5288c.appspot.com",
  messagingSenderId: "101714891521",
  appId: "1:101714891521:web:47feff310f43e5b6410100",
});

const auth = firebase.auth();

export { auth };
