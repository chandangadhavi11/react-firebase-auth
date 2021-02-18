import React from 'react';
import firebase from 'firebase/app'
import "firebase/firestore"

export const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const oAuth = await firebase.auth().signInWithPopup(provider)
    const oAuthFirstName = oAuth.user.displayName.split(" ")[0];
    const oAuthLastName = oAuth.user.displayName.split(" ")[1];


    var db = firebase.firestore()
    db.collection("users").doc(`${oAuth.user.uid}`).set({
        firstName: `${oAuthFirstName}`,
        lastName: `${oAuthLastName}`,
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    
}