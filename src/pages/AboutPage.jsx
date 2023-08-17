import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import design from "../assets/imgs/page/homepage1/design.png";
import agon from '../assets/imgs/page/homepage3/agon.svg'
import mon from '../assets/imgs/page/homepage3/mon.svg'
import fig from '../assets/imgs/page/homepage3/fig.svg'
import flow from '../assets/imgs/page/homepage3/flow.svg'
import evara from '../assets/imgs/page/homepage3/evara.svg'
import img7 from '../assets/imgs/page/about/img7.png'
import Pagination from "../components/Pagination.jsx";
import {useState, useContext} from "react";
import {postContext} from "../context/postContext.jsx";

function AboutPage() {
    const itemPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1)
    return(
        <>
           <Navbar/>
            <main className="main">
                <div className="cover-home1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1"></div>
                            <div className="col-xl-10 col-lg-12">
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">My
                                        Latest Projects</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">The
                                        convention is the main event of the year for professionals in<br
                                            className="d-none d-lg-block"/>the world of design and architecture.</p>
                                </div>
                                <div className="row text-center filter-nav">
                                    <div className="col-lg-12"><span className="wow animate__animated animate__fadeInUp"
                                                                     data-wow-delay=".0s"><span
                                        className="btn btn-border-linear btn-filter hover-up" data-filter="">All</span></span><span
                                        className="wow animate__animated animate__fadeInUp" data-wow-delay=".1s"><span
                                        className="btn btn-border-linear btn-filter hover-up" data-filter="web">Web Development</span></span><span
                                        className="wow animate__animated animate__fadeInUp" data-wow-delay=".2s"><span
                                        className="btn btn-border-linear btn-filter hover-up" data-filter="mobile">Mobile App</span></span><span
                                        className="wow animate__animated animate__fadeInUp" data-wow-delay=".3s"><span
                                        className="btn btn-border-linear btn-filter hover-up"
                                        data-filter="motion">Motion</span></span><span
                                        className="wow animate__animated animate__fadeInUp" data-wow-delay=".4s"><span
                                        className="btn btn-border-linear btn-filter hover-up" data-filter="graphic">Graphic Design</span></span>
                                    </div>
                                </div>
                                <div className="mt-70">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="project" data-category="web motion">
                                                <div className="item-content">
                                                    <div className="card-style-1 hover-up mb-30" data-wow-delay=".0s">
                                                        <div className="card-image"><a className="link-post"
                                                                                       href="portfolio-details.html"><img
                                                            src={img7} alt="Genz"/>
                                                            <div className="card-info card-bg-2">
                                                                <div className="info-bottom mb-15">
                                                                    <h3 className="color-white mb-10">Flyer design</h3>
                                                                    <p className="color-gray-500 text-sm">Lorem ipsum
                                                                        dolor sit amet, consectetur adipiscing elit.
                                                                        Nullam volutpat vitae risus eget maximus.
                                                                        Pellentesque suscipit</p>
                                                                </div>
                                                            </div></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-6">
                                            <div className="project" data-category="web graphic">
                                                <div className="item-content">
                                                    <div className="card-style-1 hover-up mb-30" data-wow-delay=".1s">
                                                        <div className="card-image"><a className="link-post"
                                                                                       href="portfolio-details.html"><img
                                                            src={img7} alt="Genz"/>
                                                            <div className="card-info card-bg-2">
                                                                <div className="info-bottom mb-15">
                                                                    <h3 className="color-white mb-10">Logo design</h3>
                                                                    <p className="color-gray-500 text-sm">Lorem ipsum
                                                                        dolor sit amet, consectetur adipiscing elit.
                                                                        Nullam volutpat vitae risus eget maximus.
                                                                        Pellentesque suscipit</p>
                                                                </div>
                                                            </div></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Pagination/>
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-20 wow animate__animated animate__fadeInUp">My
                                        Services</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">With
                                        many years of experience in the field of Digital Marketing,<br
                                            className="d-none d-lg-block"/>I am confident to bring you many outstanding
                                            values.</p>
                                </div>
                                <div className="box-features bg-gray-850 border-gray-800">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn"
                                             data-wow-delay="0s"><span
                                            className="item-icon bg-gray-950 icon-motion"></span>
                                            <h5 className="color-white mb-15">Motion &<br/>Web Graphy</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web
                                                2.0 site search engine allows you to find email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn"
                                             data-wow-delay="0.1s"><span
                                            className="item-icon bg-gray-950 icon-ui"></span>
                                            <h5 className="color-white mb-15">UI/Ux<br/>Consultancy</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web
                                                2.0 site search engine allows you to find email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn"
                                             data-wow-delay="0.2s"><span
                                            className="item-icon bg-gray-950 icon-branding"></span>
                                            <h5 className="color-white mb-15">Branding<b/>& Design</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web
                                                2.0 site search engine allows you to find email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn"
                                             data-wow-delay="0s"><span
                                            className="item-icon bg-gray-950 icon-product"></span>
                                            <h5 className="color-white mb-15">Product<br/>Photography</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web
                                                2.0 site search engine allows you to find email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn"
                                             data-wow-delay="0.1s"><span
                                            className="item-icon bg-gray-950 icon-key"></span>
                                            <h5 className="color-white mb-15">Key Seo<br/>Optimization</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web
                                                2.0 site search engine allows you to find email allerts</p>
                                        </div>
                                        <div className="col-lg-4 col-md-6 mb-50 wow animate__animated animate__fadeIn"
                                             data-wow-delay="0.2s"><span
                                            className="item-icon bg-gray-950 icon-social"></span>
                                            <h5 className="color-white mb-15">Social<br/>Management</h5>
                                            <p className="text-base color-gray-700">NetTracking" is a very powerful Web
                                                2.0 site search engine allows you to find email allerts</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-30">
                                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp"
                                        data-wow-delay=".0s">FAQs</h2>
                                </div>
                                <div className="box-faqs mb-70">
                                    <div className="accordion" id="accordionFaqs">
                                        <div
                                            className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                        aria-expanded="true" aria-controls="collapseOne"><span
                                                    className="heading-4 color-white">Understanding company billing and accounts</span>
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse show" id="collapseOne"
                                                 aria-labelledby="headingOne" data-bs-parent="#accordionFaqs">
                                                <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet
                                                    laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan
                                                    blandit, elit ligula eleifend velit, luctus mattis ante nulla
                                                    condimentum nulla.
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo"><span
                                                    className="heading-4 color-white">Updating your billing credit card</span>
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse" id="collapseTwo"
                                                 aria-labelledby="headingTwo" data-bs-parent="#accordionFaqs">
                                                <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet
                                                    laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan
                                                    blandit, elit ligula eleifend velit, luctus mattis ante nulla
                                                    condimentum nulla.
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree"><span
                                                    className="heading-4 color-white">Application keyboard shortcuts and tips</span>
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse" id="collapseThree"
                                                 aria-labelledby="headingThree" data-bs-parent="#accordionFaqs">
                                                <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet
                                                    laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan
                                                    blandit, elit ligula eleifend velit, luctus mattis ante nulla
                                                    condimentum nulla.
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                        aria-expanded="false" aria-controls="collapseFour"><span
                                                    className="heading-4 color-white">Cancelling a website subscription</span>
                                                </button>
                                            </h2>
                                            <div className="accordion-collapse collapse" id="collapseFour"
                                                 aria-labelledby="headingFour" data-bs-parent="#accordionFaqs">
                                                <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet
                                                    laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan
                                                    blandit, elit ligula eleifend velit, luctus mattis ante nulla
                                                    condimentum nulla.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-70 mb-50">
                                    <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Testimonials</h2>
                                    <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Nettracking
                                        is a B2B marketing software for telecommunications industry.</p>
                                </div>
                                <div className="box-testimonials mb-150animate__fadeIn mb-100">
                                    <div className="box-swiper">
                                        <div className="swiper-container swiper-group-3">
                                            <div className="swiper-wrapper pt-5">
                                                <div className="swiper-slide">
                                                    <div
                                                        className="card-testimonials bg-gray-850 border-gray-800 hover-up">
                                                        <div className="box-author mb-20"><img
                                                            src={design} alt="Genz"/>
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Karen Adderiy</h6><span
                                                                className="color-gray-700 text-sm">Alithemes Co</span>
                                                            </div>
                                                        </div>
                                                        <div className="card-info">
                                                            <p className="color-gray-500">Dignissim quis turpis quis,
                                                                semper vehicula dolor. Suspendisse tincidunt consequat
                                                                quam, ac posuere leo dapibus id.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="card-testimonials bg-gray-850 border-gray-800 hover-up">
                                                        <div className="box-author mb-20"><img
                                                            src={design} alt="Genz"/>
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Miriam Martinez</h6><span
                                                                className="color-gray-700 text-sm">Alithemes Co</span>
                                                            </div>
                                                        </div>
                                                        <div className="card-info">
                                                            <p className="color-gray-500">Dignissim quis turpis quis,
                                                                semper vehicula dolor. Suspendisse tincidunt consequat
                                                                quam, ac posuere leo dapibus id.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="card-testimonials bg-gray-850 border-gray-800 hover-up">
                                                        <div className="box-author mb-20"><img
                                                            src={design} alt="Genz"/>
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">Shelley Clifford</h6>
                                                                <span
                                                                    className="color-gray-700 text-sm">Alithemes Co</span>
                                                            </div>
                                                        </div>
                                                        <div className="card-info">
                                                            <p className="color-gray-500">Dignissim quis turpis quis,
                                                                semper vehicula dolor. Suspendisse tincidunt consequat
                                                                quam, ac posuere leo dapibus id.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-buttons">
                                            <div className="swiper-button-prev swiper-button-prev-style-3"></div>
                                            <div className="swiper-button-next swiper-button-next-style-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-end mt-30">
                                    <div className="col-lg-9 wow animate__animated animate__fadeIn">
                                        <h3 className="color-linear">Content publishing cooperation<br/>
                                            with my partners</h3>
                                    </div>
                                    <div
                                        className="col-lg-3 text-lg-end mt-15 hover-up wow animate__animated animate__fadeIn"
                                        data-wow-delay="0.2s"><a className="link-brand-1" href="#">Learn More</a></div>
                                </div>
                                <div className="list-logos mt-50 mb-30">
                                    <div className="container">
                                        <div className="row">
                                            <div className="swiper-container swiper-group-1">
                                                <div className="swiper-wrapper wow animate__animated animate__fadeIn">
                                                    <div className="swiper-slide"><a href="#"><img
                                                        src={agon} alt="Genz"/></a></div>
                                                    <div className="swiper-slide"><a href="#"><img
                                                        src={mon} alt="Genz"/></a></div>
                                                    <div className="swiper-slide"><a href="#"><img
                                                        src={fig} alt="Genz"/></a></div>
                                                    <div className="swiper-slide"><a href="#"><img
                                                        src={flow} alt="Genz"/></a></div>
                                                    <div className="swiper-slide"><a href="#"><img
                                                        src={evara} alt="Genz"/></a></div>
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
export default AboutPage