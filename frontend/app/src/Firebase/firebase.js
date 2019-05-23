import app from 'firebase/app'

const config = {
  apiKey: "AIzaSyBX9gu9YMYSVMM6YWEc3-q8a9WLw-TgtRI",
  authDomain: "creditcardresearch-19e6c.firebaseapp.com",
  databaseURL: "https://creditcardresearch-19e6c.firebaseio.com",
  projectId: "creditcardresearch-19e6c",
  storageBucket: "creditcardresearch-19e6c.appspot.com",
  messagingSenderId: "150007916872",
  appId: "1:150007916872:web:eeb6760dd602e3de"
};

class Firebase{
  constructor() {
    app.initializeApp(config);

    this.db = app.database();
  }
}

export default Firebase;t
