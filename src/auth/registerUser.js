import firebase from 'firebase/app'
import "firebase/firestore"
import { getCurrentUser } from "./getCurrentUser"

export const registerUser = async (email, password, firstName, lastName) => {
    
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const db = firebase.firestore()

        
        var user = getCurrentUser();
        user.sendEmailVerification().then(()=> {
            console.log("Email Verification Done!");
        }).catch((error)=> {
            console.log(error);
        })

        db.collection("users").doc(`${result.user.uid}`).set({
            firstName: `${firstName}`,
            lastName: `${lastName}`,
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        
        
          

        return {};
    } catch (error) {
        throw new Error(error.message)
    }
    



}