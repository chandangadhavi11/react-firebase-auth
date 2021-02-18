import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app'
import "firebase/firestore"
import { getCurrentUser } from './getCurrentUser';

export const getCurrentUserData = () => {

    var userData = getCurrentUser()
    var db = firebase.firestore()
    var docRef = db.collection("users").doc(userData.uid);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


}