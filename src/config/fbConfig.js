// import only basic features with /app
import firebase from "firebase/app" 
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGWW8szqOrcLqLIxRfKKYpEf2mKsyNO18",
  authDomain: "jeffs-fire-portfolio.firebaseapp.com",
  databaseURL: "https://jeffs-fire-portfolio-default-rtdb.firebaseio.com",
  projectId: "jeffs-fire-portfolio",
  storageBucket: "jeffs-fire-portfolio.appspot.com",
  messagingSenderId: "357605801017",
  appId: "1:357605801017:web:f6bd68b73e1c570ac2a1e8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;