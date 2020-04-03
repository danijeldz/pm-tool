import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJXbBMFjGUMshSC2qJof8yxNf0GQ-uoso",
  authDomain: "pm-tool-4bb85.firebaseapp.com",
  databaseURL: "https://pm-tool-4bb85.firebaseio.com",
  projectId: "pm-tool-4bb85",
  storageBucket: "pm-tool-4bb85.appspot.com",
  messagingSenderId: "833245443273",
  appId: "1:833245443273:web:2b19b9e5caa2cd241ec918"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
