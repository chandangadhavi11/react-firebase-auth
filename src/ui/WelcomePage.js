import React,{useState, useEffect} from 'react';
import {signout} from "../auth/signout"
import { useHistory } from "react-router-dom"
import {getCurrentUser} from "../auth/getCurrentUser"
import {getCurrentUserData} from "../auth/getCurrentUserData"

import firebase from "firebase/app"
import "firebase/firestore"

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)


    useEffect(() => {
        const db = firebase.firestore()

        var docRef = db.collection("users").doc(getCurrentUser().uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                setData(doc.data())
                
            } else {
                console.log("No such document!");
            }
        }).then(setLoading(false)).catch((error) => {
            console.log("Error getting document:", error);
        });

    }, [])
    return {data, loading, error}
}

const WelcomePage = () => {

    const {data, loading, error} = useFetch();
    const user = getCurrentUser();
    const emailVerified = user.emailVerified

    const history = useHistory();
    const onSignOutButtonClicked = async () => {
        try {
            await signout();
            history.push("/")
        } catch (error) {
            alert(error.message)
        }
    }
    if(loading){
        return (
            <div>
                <h1 style={{color:"#000"}}>Loading...</h1>
            </div>
        )
    }
    if(!emailVerified){
        return(
            <div>
                <h1>Email Verification is done yet. So please check your email</h1>
                <p>If already done then refresh the page</p>
            </div>
        )
    }

    return (
        <div>
            <h1 style={{color:"#000"}}>Hi {data.firstName}! Welcome To The Page</h1>
            <button className="button" onClick={onSignOutButtonClicked}>Sign Out</button>
        </div>
    )
    
}

export default WelcomePage;