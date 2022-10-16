import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'


function Login() {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // firebase stuff
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
        // firebase stuff
    }

    return (
        <div className='login'>
            <Link to='/' >
                <img className='login_logo' src='https://syncoaudio.in/wp-content/uploads/2022/01/Amazon-Jobs.png' />
            </Link>

            <div className='login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button
                        className='login_signInButton'
                        type='submit'
                        onClick={signIn}>
                        Sign in
                    </button>
                </form>
                <p>
                    We know that you care how information about you is used and shared,
                    and we appreciate your trust that we will do so carefully and sensibly.
                    This Privacy Notice describes how Amazon.com and its
                    affiliates (collectively "Amazon") collect and process
                    your personal information through Amazon websites, devices,
                    products, services, online and physical stores, and
                    applications that reference this Privacy Notice (together "Amazon Services").
                    By using Amazon Services, you are consenting to the practices described in this Privacy Notice.
                </p>

                <button
                    className='login_registerButton'
                    type='submit'
                    onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login