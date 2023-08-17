import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import { useNavigate   } from 'react-router-dom';
import {isAuthenticated, loginUser} from '../actions/auth.js'

function LoginPage({loginUser}) {
    const [form, setForm] = useState({email: '', password: ''})
    const {email, password} = form;
    const getValues = (e) => {setForm({...form, [e.target.name]: e.target.value})}
    const navigate = useNavigate()

    const login = (e) => {
        e.preventDefault()
        loginUser(email, password)
    }
    return(
        <>
            <Navbar/>
            <main className="main">
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="text-center mt-50 pb-50">
                                    <h2 className="color-linear d-inline-block">Welcome back !</h2>
                                </div>
                                <div className="box-form-login pb-50">
                                    <div className="form-login bg-gray-850 border-gray-800 text-start">
                                        <form onSubmit={login}>
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800"
                                                       type="email"
                                                       required
                                                       name='email'
                                                       value={email}
                                                       onInput={e => getValues(e)}
                                                       placeholder="Email"/>
                                            </div>
                                            <div className="form-group position-relative">
                                                <input className="form-control bg-gray-850 border-gray-800 password"
                                                       type="password"
                                                       required
                                                       name='password'
                                                       placeholder="Password"
                                                       value={password}
                                                       onInput={e => getValues(e)}
                                                />

                                                <span className="viewpass"></span>
                                            </div>
                                            <div className="form-group"><a className="color-white link" href="#">Forgot
                                                password?</a></div>
                                            <div className="form-group">
                                                <input className="btn btn-linear color-gray-850 hover-up" type="submit"
                                                       value="Log me in"/>
                                            </div>
                                            <div className="form-group mb-0"><span>Don’t have an account?</span><Link
                                                className="color-linear" to="/register"> Sign Up</Link></div>
                                        </form>
                                    </div>
                                    <div className="box-line"><span
                                        className="bg-gray-900">Or, sign in with your email</span></div>
                                    <div className="box-login-gmail bg-gray-850 border-gray-800 hover-up"><a
                                        className="btn btn-login-gmail color-gray-500" href="#">Sign in with Google</a>
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

export default LoginPage