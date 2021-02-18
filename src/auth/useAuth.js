import React,{useState, useEffect} from 'react';
import {getCurrentUser} from "../auth/getCurrentUser"
import {addAuthListner} from "../auth/addAuthListner"

export const useAuth = () =>{

    const [authInfo, setAuthInfo] = useState(() => {
        const user = getCurrentUser()
        const isLoading = !user
        return {isLoading, user}
    })

    useEffect(() => {
        const unsubscribe = addAuthListner((user) => {
            setAuthInfo({isLoading : false, user })
        })
        return unsubscribe
    }, [])
    return authInfo

}