import firebase from 'firebase/app'

export const signin = async (email, password) => {
    
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password);
        return {};
    } catch (error) {
        throw new Error("Error Signing In")
    }
    

}