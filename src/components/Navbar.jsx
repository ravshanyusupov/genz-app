import logo from '../assets/imgs/template/logo.svg'
import logo_2 from '../assets/imgs/template/logo-day.svg'
import {Link} from "react-router-dom";
import {useState} from "react";
import {isAuthenticated} from "../actions/auth.js";
import {logoutUser} from "../actions/auth.js";

function Navbar() {
    const [active, setActive] = useState('')
    const logout = () => {
        alert('fgfgf')
    }
    return (
        <>
            <header className="header sticky-bar bg-gray-900">
                <div className="container">
                    <div className="main-header">
                        <div className="header-logo"><Link className="d-flex" to="/"><img className="logo-night"
                                                                                          alt="GenZ"
                                                                                          src={logo}/><img
                            className="d-none logo-day" alt="GenZ" src={logo_2}/></Link></div>
                        <div className="header-nav">
                            <nav className="nav-main-menu d-none d-xl-block">
                                <ul className="main-menu">
                                    <li className="has-children"><Link
                                        className={active === 'Home' ? 'active' : 'color-gray-500'}
                                        onClick={() => setActive('Home')} to="/">Home</Link></li>
                                    <li className="has-children"><Link className="color-gray-500" to="/about">About Me</Link></li>
                                    <li className="has-children"><a className="color-gray-500">Category</a></li>
                                    <li className="has-children"><a className="color-gray-500" href="#">Projects</a></li>
                                    <li><Link
                                        to="/contact"
                                        className={active === 'Contact' ? 'active' : 'color-gray-500'}
                                        onClick={() => setActive('Contact')}
                                    >Contact</Link></li>
                                </ul>
                            </nav>
                            <div className="burger-icon burger-icon-white"><span
                                className="burger-icon-top"></span><span
                                className="burger-icon-mid"></span><span className="burger-icon-bottom"></span></div>
                        </div>
                        <div className="header-right text-end"><a className="btn btn-search" href="#"></a>
                            <div className="form-search p-20">
                                <form action="#">
                                    <input className="form-control" type="text" placeholder="Search"/>
                                    <input className="btn-search-2" type="submit" value=""/>
                                </form>
                                <div className="popular-keywords text-start mt-20">
                                    <p className="mb-10 color-white">Popular tags:</p><a
                                    className="color-gray-600 mr-10 font-xs" href="#"># Travel,</a><a
                                    className="color-gray-600 mr-10 font-xs" href="#"># Tech,</a><a
                                    className="color-gray-600 mr-10 font-xs" href="#"># Movie</a><a
                                    className="color-gray-600 mr-10 font-xs" href="#"># Lifestyle</a><a
                                    className="color-gray-600 mr-10 font-xs" href="#"># Sport</a>
                                </div>
                            </div>
                            <div className="switch-button">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" id="flexSwitchCheckChecked" type="checkbox"
                                           role="switch"/>
                                </div>
                            </div>
                            {isAuthenticated ?
                                <button
                                    className="btn btn-danger d-none d-sm-inline-block hover-up hover-shadow"
                                    onClick={logoutUser}
                                >Logout</button>
                                : <Link className="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow"
                                        to="/login" >Sign In</Link>
                            }


                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar