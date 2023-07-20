import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";

function Register() {
    return(
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
                                        <form action="#">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800" type="text"
                                                       placeholder="Full name"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800" type="text"
                                                       placeholder="Email"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800" type="text"
                                                       placeholder="User name"/>
                                            </div>
                                            <div className="form-group position-relative">
                                                <input className="form-control bg-gray-850 border-gray-800 password"
                                                       type="password" placeholder="Password"/><span
                                                    className="viewpass"></span>
                                            </div>
                                            <div className="form-group position-relative">
                                                <input className="form-control bg-gray-850 border-gray-800 password"
                                                       type="password" placeholder="Confirm password"/><span
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

export default Register