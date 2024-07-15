import { useState } from "react"
import { Navigate, Link} from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth"

export default function Login(){

    const {userLoggedIn} = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignIn, setIsSignIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!userLoggedIn) {
            setIsSignIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if(!isSignIn) {
            setIsSignIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSignIn(false)
            })
        }
    }


    return    
    

}