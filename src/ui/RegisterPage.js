import React from 'react';
import "../App.css"
import {registerUser} from "../auth/registerUser"
import {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom"
const RegisterPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [emailValue, setEmail] = useState('')
    const [passwordValue, setPassword] = useState('')
    const history = useHistory();
    const onRegisterButtonClicked = async () => {

        try {
            await registerUser(emailValue, passwordValue, firstName, lastName);
            history.push("/welcome")
        } catch (error) {
            alert(error)
        }

    }
    return (
        <div>
            <h1 style={{color:"#000"}}>Register</h1>
                <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(eve) => setFirstName(eve.target.value)}/>
                <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={(eve) => setLastName(eve.target.value)}/>
                <input type="text" id="email" placeholder="Email" value={emailValue} onChange={(eve) => setEmail(eve.target.value)}/>
                <input type="text" id="pass" placeholder="Password" value={passwordValue} onChange={(eve) => setPassword(eve.target.value)}/>
                <button className="button" onClick={onRegisterButtonClicked}>Register</button>
            
        </div>
    )
}

export default RegisterPage;