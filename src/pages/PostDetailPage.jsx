import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import design from '../assets/imgs/page/homepage1/design.png'
import PopularTags from "../components/PopularTags.jsx";
import BottomGallery from "../components/BottomGallery.jsx";
import LastComments from "../components/LastComments.jsx";
import PopularPosts from "../components/PopularPosts.jsx";
import {Link} from "react-router-dom";
import Categories from "../components/Categories.jsx";
function PostDetailPage() {
    return (
        <>
            <Navbar/>
            <main className="main">
                <div className="cover-home3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1"></div>
                            <div className="col-xl-10 col-lg-12">
                                <div className="row align-items-end mt-50">
                                    <div className="col-lg-7 mb-20">
                                        <div className="d-inline-block position-relative">
                                            <h1 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn">Healthy</h1>
                                            <span className="btn btn-linear-small btn-number-arts">36 articles</span>
                                        </div>
                                        <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi sed
                                            turpis vulputate viverra. Morbi ligula elit, hendrerit non nisl tincidunt,
                                            sodales consequat magna.</p>
                                    </div>
                                    <div className="col-lg-5 mb-20 text-start text-lg-end">
                                        <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                                            <ul className="breadcrumb">
                                                <li><Link className="home" to="/">Home</Link></li>
                                                <li><Link to="/post">Blog</Link></li>
                                                <li><span>Healthy</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom border-gray-800 mt-10 mb-30"></div>
                                    </div>
                                </div>
                                <div className="box-list-posts mt-40">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div
                                                className="card-blog-1 card-blog-2 hover-up wow animate__animated animate__fadeIn">
                                                <div className="card-image mb-20"><a className="post-type" href="#"></a><a
                                                    href="single-sidebar.html"><img
                                                    src={design} alt="Genz"/></a></div>
                                                <div className="card-info"><a href="single-sidebar.html">
                                                    <h4 className="color-white mt-30">I work best when my space is
                                                        filled with inspiration</h4></a>
                                                    <p className="mt-25 text-lg color-gray-700">Gosh jaguar ostrich
                                                        quail one excited dear hello and bound and the and bland moral
                                                        misheard roadrunner flapped lynx far that and jeepers giggled
                                                        far and far</p>
                                                    <div className="row align-items-center mt-45">
                                                        <div className="col-7">
                                                            <div className="box-author"><img
                                                                src={design} alt="Genz"/>
                                                                <div className="author-info">
                                                                    <h6 className="color-gray-700">Joseph</h6><span
                                                                    className="color-gray-700 text-sm">25 April 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-5 text-end"><a
                                                            className="readmore color-gray-500 text-sm"
                                                            href="single-sidebar.html"><span>Read more</span></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-list-posts mt-30">
                                                <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                    <div className="card-image hover-up"><a href="#"><img
                                                        src={design} alt="Genz"/></a></div>
                                                    <div className="card-info"><a
                                                        className="btn btn-tag bg-gray-800 hover-up"
                                                        href="blog-archive.html">Working Tips</a><a href="#">
                                                        <h4 className="mt-15 mb-20 color-white">Helpful Tips for Working
                                                            from Home as a Freelancer</h4></a>
                                                        <p className="color-gray-500">Gosh jaguar ostrich quail one
                                                            excited dear hello and bound and the and bland moral
                                                            misheard roadrunner flapped lynx far that and jeepers
                                                            giggled far and far</p>
                                                        <div className="row mt-20">
                                                            <div className="col-7"><a
                                                                className="color-gray-700 text-sm mr-15"
                                                                href="blog-archive.html"># Travel</a><a
                                                                className="color-gray-700 text-sm"
                                                                href="blog-archive.html"># Lifestyle</a></div>
                                                            <div className="col-5 text-end"><span
                                                                className="color-gray-700 text-sm timeread">3 mins read</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                    <div className="card-image hover-up"><a href="#"><img
                                                        src={design} alt="Genz"/></a></div>
                                                    <div className="card-info"><a
                                                        className="btn btn-tag bg-gray-800 hover-up"
                                                        href="blog-archive.html">Development</a><a href="#">
                                                        <h4 className="mt-15 mb-20 color-white">10 Easy Ways to Be
                                                            Environmentally Conscious At Home</h4></a>
                                                        <p className="color-gray-500">Gosh jaguar ostrich quail one
                                                            excited dear hello and bound and the and bland moral
                                                            misheard roadrunner flapped lynx far that and jeepers
                                                            giggled far and far</p>
                                                        <div className="row mt-20">
                                                            <div className="col-7"><a
                                                                className="color-gray-700 text-sm mr-15"
                                                                href="blog-archive.html"># Travel</a><a
                                                                className="color-gray-700 text-sm"
                                                                href="blog-archive.html"># Lifestyle</a></div>
                                                            <div className="col-5 text-end"><span
                                                                className="color-gray-700 text-sm timeread">3 mins read</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-list-posts wow animate__animated animate__fadeIn">
                                                    <div className="card-image hover-up"><a href="#"><img
                                                        src={design} alt="Genz"/></a></div>
                                                    <div className="card-info"><a
                                                        className="btn btn-tag bg-gray-800 hover-up"
                                                        href="blog-archive.html">Lifestyle</a><a href="#">
                                                        <h4 className="mt-15 mb-20 color-white">How to Give Your Space a
                                                            Parisian-Inspired Makeover</h4></a>
                                                        <p className="color-gray-500">Gosh jaguar ostrich quail one
                                                            excited dear hello and bound and the and bland moral
                                                            misheard roadrunner flapped lynx far that and jeepers
                                                            giggled far and far</p>
                                                        <div className="row mt-20">
                                                            <div className="col-7"><a
                                                                className="color-gray-700 text-sm mr-15"
                                                                href="blog-archive.html"># Travel</a><a
                                                                className="color-gray-700 text-sm"
                                                                href="blog-archive.html"># Lifestyle</a></div>
                                                            <div className="col-5 text-end"><span
                                                                className="color-gray-700 text-sm timeread">3 mins read</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <nav className="mb-50">
                                                <ul className="pagination">
                                                    <li className="page-item wow animate__animated animate__fadeIn"
                                                        data-wow-delay=".0s"><a className="page-link page-prev"
                                                                                href="#"><i
                                                        className="fi-rr-arrow-small-left"></i></a></li>
                                                    <li className="page-item wow animate__animated animate__fadeIn"
                                                        data-wow-delay=".1s"><a className="page-link" href="#">1</a>
                                                    </li>
                                                    <li className="page-item wow animate__animated animate__fadeIn"
                                                        data-wow-delay=".2s"><a className="page-link active"
                                                                                href="#">2</a></li>
                                                    <li className="page-item wow animate__animated animate__fadeIn"
                                                        data-wow-delay=".3s"><a className="page-link" href="#">3</a>
                                                    </li>
                                                    <li className="page-item wow animate__animated animate__fadeIn"
                                                        data-wow-delay=".4s"><a className="page-link" href="#">...</a>
                                                    </li>
                                                    <li className="page-item wow animate__animated animate__fadeIn"
                                                        data-wow-delay=".5s"><a className="page-link page-next"
                                                                                href="#"><i
                                                        className="fi-rr-arrow-small-right"></i></a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <Categories/>
                                    </div>
                                </div>
                                <div className="mb-10"></div>
                                <PopularTags/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
)
}
export default PostDetailPage