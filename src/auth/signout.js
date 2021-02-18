import firebase from 'firebase/app'

export const signout = async() => {

    try {
        await firebase.auth().signOut()
    } catch (error) {
        console.log(error);
        throw new Error("Error while signing out")
    }

}