import firebase from "firebase/app"
import 'firebase/database'

const config = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL:"https://trello-clone-28a94.firebaseio.com",
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase