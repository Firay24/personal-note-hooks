import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

function RegisterInput({ register }) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onNameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        register({name, email, password})
    }

    return (
        <form onSubmit={onSubmitHandler} className='register-input'>
            <input type="text" placeholder='nama' value={name} onChange={onNameChangeHandler} />
            <input type="email" placeholder='email' value={email} onChange={onEmailChangeHandler} />
            <input type="password" autoComplete='current-password' placeholder='password' value={password} onChange={onPasswordChangeHandler} />
            <button>Register</button>
        </form>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput
