import {useState} from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import api from "../axios.js";
import login from "./LoginPage.jsx";
import { useNavigate   } from 'react-router-dom';



function RegisterPage() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault()
        await api.post('register',
            {
                name: name,
                username: username,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            })
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.data.token)
                navigate('/')

            })
            .catch(err => console.log(err.response.data.message))
    }
    return (
        <>
            <Navbar/>
            <main className="main">
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-50 pb-50">
                                    <h2 className="color-linear d-inline-block">Register</h2>
                                </div>
                                <div className="box-form-login pb-50">
                                    <div className="form-login bg-gray-850 border-gray-800 text-start">
                                        <form action="#" onSubmit={submitForm}>
                                            <div className="form-group">
                                                <input
                                                    className="form-control bg-gray-850 border-gray-800"
                                                    type="text"
                                                    placeholder="Full name"
                                                    required
                                                    value={name}
                                                    onInput={e => setName(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    className="form-control bg-gray-850 border-gray-800"
                                                    type="text"
                                                    placeholder="Email"
                                                    required
                                                    value={email}
                                                    onInput={e => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    className="form-control bg-gray-850 border-gray-800"
                                                    type="text"
                                                    placeholder="User name"
                                                    required
                                                    value={username}
                                                    onInput={e => setUsername(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group position-relative">
                                                <input
                                                    className="form-control bg-gray-850 border-gray-800 password"
                                                    type="password"
                                                    placeholder="Password"
                                                    required
                                                    value={password}
                                                    onInput={e => setPassword(e.target.value)}
                                                /><span
                                                className="viewpass"></span>
                                            </div>
                                            <div className="form-group position-relative">
                                                <input
                                                    className="form-control bg-gray-850 border-gray-800 password"
                                                    type="password"
                                                    placeholder="Confirm password"
                                                    required
                                                    value={passwordConfirmation}
                                                    onInput={e => setPasswordConfirmation(e.target.value)}
                                                /><span
                                                className="viewpass"></span>
                                            </div>
                                            <div className="form-group">
                                                <input className="btn btn-linear color-gray-850 hover-up" type="submit"
                                                       value="Create an account"/>
                                            </div>
                                            <div className="form-group mb-0"><span>Already have an account?</span><Link
                                                className="color-linear" to="/login"> Sign In</Link></div>
                                        </form>
                                    </div>
                                    <div className="box-line"><span
                                        className="bg-gray-900">Or, sign up with your email</span></div>
                                    <div className="box-login-gmail bg-gray-850 border-gray-800 hover-up"><a
                                        className="btn btn-login-gmail color-gray-500" href="#">Sign up with Google</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default RegisterPage