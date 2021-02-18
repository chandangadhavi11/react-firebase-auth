import firebase from 'firebase/app'
import "firebase/firestore"
import {useState, useEffect} from 'react';

export const getCurrentUser = () => {
    const user = firebase.auth().currentUser;
    if (user != null) {
        return user
    }else{
        return null;
    }
}