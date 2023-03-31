import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDnoNiHsS_p-_2conPcltaAjaK9RPvutQ4",
    authDomain: "task-875a0.firebaseapp.com",
    projectId: "task-875a0",
    storageBucket: "task-875a0.appspot.com",
    messagingSenderId: "912619721310",
    appId: "1:912619721310:web:c6b19cad278b80edc1dacf"
  };

  firebase.initializeApp(firebaseConfig)
  const database = firebase.firestore()
  export default database