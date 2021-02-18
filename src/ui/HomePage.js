import React from 'react';
import "../App.css"
import {signInWithGoogle} from "../auth/signInWithGoogle"
import {useHistory} from "react-router-dom"

const HomePage = () => {
    const history = useHistory()
    const onOAuthClickListner = async () => {
        await signInWithGoogle();
        history.push("/welcome")
    }
    return (
        <div>
            <h1 style={{color:"#000"}}>Home</h1>
            <form action="/signin">
                <button className="button"><span>Sign In</span></button>
            </form>
            <form action="/register">
                <button className="button"><span>Register</span></button>
            </form>
            <button className="button" onClick={onOAuthClickListner}><span>Google</span></button>
        </div>
    )
}

export default HomePage;