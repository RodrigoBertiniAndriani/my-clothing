import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAz6bkST9Tu0WFeHsX6O-TgfbdWesigL4k",
    authDomain: "odk-auth.firebaseapp.com",
    projectId: "odk-auth",
    storageBucket: "odk-auth.appspot.com",
    messagingSenderId: "723086593581",
    appId: "1:723086593581:web:73088e5da0b1880def72a4",
    measurementId: "G-0GRBMW3DLR"
}


export const createUserProfileDocument = async ( userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(e){
            console.error('Error creating user', e.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;