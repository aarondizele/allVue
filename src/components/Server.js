import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBeAdSk6zAkN7H03WgSmTjUFRwQQ-YZAew',
  authDomain: 'laxistech-54e69.firebaseapp.com',
  databaseURL: 'https://laxistech-54e69.firebaseio.com',
  projectId: 'laxistech-54e69',
  storageBucket: 'laxistech-54e69.appspot.com',
  messagingSenderId: '652978401638'
}

let app = Firebase.initializeApp(config)
let db = app.database()
