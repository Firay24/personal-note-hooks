import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LoginInput from '../components/LoginInput'
import { login } from '../utils/api'
import ToggleThemeButton from '../components/ToggleThemeButton'

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password })

        if (!error) {
            loginSuccess(data)
        }
    }

    return (
        <section className='login-page'>
            <ToggleThemeButton />
            <h2>Login Personal Notes</h2>
            <LoginInput login={onLogin} />
            <p>belum punya akun? <Link className='login-page-link' to='/register'>Daftar disini</Link></p>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired
}

export default LoginPage
