import firebase from 'firebase/app'

export const addAuthListner = (callback) => {
    const onChange = (user) => {

        if(user){
            callback({})
        }else{
            callback(null)
        }
    }
    return firebase.auth().onAuthStateChanged(onChange)
}