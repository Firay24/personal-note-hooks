import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

function LoginInput({ login }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        login({email, password})
    }

    return (
        <form className='login-input' onSubmit={onSubmitHandler}>
            <input type="email" placeholder='email' value={email} onChange={onEmailChangeHandler} />
            <input type="password" autoComplete='current-password' placeholder='password' value={password} onChange={onPasswordChangeHandler} />
            <button>Masuk</button>
        </form>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired
}

export default LoginInput
