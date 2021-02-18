import React from 'react';
import {Redirect, Route} from "react-router-dom"

const ProtectedRoute = ({ isAuthed, isLoading, ...props }) =>{

    if(isLoading){
        return <div style={{color: "#000"}}>Loading...</div>
    }

    if(!isAuthed){
        return <Redirect to="signin"/>
    }

    return(
        <Route {...props}/>
    )
}
export default ProtectedRoute;