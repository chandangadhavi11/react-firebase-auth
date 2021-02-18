import React from 'react';
import "../App.css"
import {signin} from "../auth/signin"
import {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom"
const SignInPage = () => {
    const [emailValue, setEmail] = useState('')
    const [passwordValue, setPassword] = useState('')
    const history = useHistory();
    const onSignInButtonClicked = async () => {

        try {
            await signin(emailValue, passwordValue);
            history.push("/welcome")
        } catch (error) {
            alert(error)
        }

    }
    return (
        <div>
            <h1 style={{color:"#000"}}>Sign In</h1>
            
                <input type="text" id="email" placeholder="Email" value={emailValue} onChange={(eve) => setEmail(eve.target.value)}/>
                <input type="text" id="pass" placeholder="Password" value={passwordValue} onChange={(eve) => setPassword(eve.target.value)}/>
                <button className="button" onClick={onSignInButtonClicked}>Sign In</button>
            
        </div>
    )
}

export default SignInPage;