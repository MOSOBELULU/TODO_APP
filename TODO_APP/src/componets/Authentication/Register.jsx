import { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";

const Register = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPass] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    

    const onSubmit = async (e) => {
        e.preventDefault()
    }
}