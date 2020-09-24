const firebase = require('firebase')

const firebaseConfig = require('../../configs/firebase');
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()


module.exports = {
    db,
    firebase
}