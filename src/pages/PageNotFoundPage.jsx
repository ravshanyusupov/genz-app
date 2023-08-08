import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import pageNotFound from '../assets/imgs/page/404/404.svg'
import {Link} from "react-router-dom";

function PageNotFoundPage() {
    return(
        <>
            <Navbar/>
            <main className="main">
                <div className="cover-home3 shadow-page-404">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 ml-auto mr-auto">
                                <div className="box-page-404">
                                    <div className="text-center mb-150 mt-100">
                                        <div className="box-404 row">
                                            <div className="col-lg-6">
                                                <div className="image-404"><img src={pageNotFound} alt="Genz"/></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="info-404 text-start mt-60">
                                                    <h2 className="color-linear mb-20">Don't be spooked !</h2>
                                                    <p className="text-xl color-gray-500">The page you’re looking for
                                                        has slipped in to an unknown realm. Click the button below to go
                                                        back to the homepage.</p>
                                                    <div className="mt-25"><Link className="btn btn-linear hover-up"
                                                                              to="/">Homepage</Link></div>
                                                </div>
                                            </div>
                                        </div>
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

export default PageNotFoundPage