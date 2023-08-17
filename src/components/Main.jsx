import {CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";
import pattern_1 from '../assets/imgs/template/pattern-1.svg'
import pattern_2 from '../assets/imgs/template/pattern-2.svg'
import pattern_3 from '../assets/imgs/template/pattern-3.svg'
import pattern_4 from '../assets/imgs/template/pattern-4.svg'
import banner from '../assets/imgs/page/homepage1/banner.png'
import sport from '../assets/imgs/page/homepage1/sport.png'
import travel from '../assets/imgs/page/homepage1/travel.png'
import desisn from '../assets/imgs/page/homepage1/design.png'
import movie from '../assets/imgs/page/homepage1/movie.png'
import lifestyle from '../assets/imgs/page/homepage1/lifestyle.png'
import PopularTags from "./PopularTags.jsx";
import RecentPosts from "./RecentPosts.jsx";
import Posts from "./Posts.jsx";
import Loader from "./Loader.jsx";

function Main() {
    return (
        <>
             <main className="main">
                    <div className="cover-home1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-1"></div>
                                <div className="col-xl-10 col-lg-12">
                                    <div className="banner">
                                        <div className="row align-items-end">
                                            <div className="col-lg-6 pt-100"><span
                                                className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp">Hello Everyone!</span>
                                                <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">I’m<a
                                                    className="typewrite color-linear" href="#" data-period="3000"
                                                    data-type="[ &quot;Brian Clark&quot;, &quot;Designer&quot;, &quot;Creator&quot; ]"></a>
                                                </h1>
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">I
                                                            use animation as a third dimension by which to simplify
                                                            experiences and kuiding thro each and every interaction. I’m not
                                                            adding motion just to spruce things up, but doing it in ways
                                                            that.</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">
                                                    <div className="inner-subscriber bg-gray-800">
                                                        <form className="d-flex" action="#">
                                                            <input className="input-sybscriber" type="text"
                                                                   placeholder="Type your email address"/>
                                                            <button
                                                                className="btn btn-linear btn-arrow-right"
                                                            >Subscribe <i><CaretRightFilled/></i>
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <div
                                                    className="banner-img position-relative wow animate__animated animate__fadeIn">
                                                    <img src={banner} alt="Genz"/>
                                                    <div className="pattern-1"><img
                                                        src={pattern_1} alt="Genz"/></div>
                                                    <div className="pattern-2"><img
                                                        src={pattern_2} alt="Genz"/></div>
                                                    <div className="pattern-3"><img
                                                        src={pattern_3} alt="Genz"/></div>
                                                    <div className="pattern-4"><img
                                                        src={pattern_4} alt="Genz"/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-70">
                                        <div className="box-topics border-gray-800 bg-gray-850">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <h5 className="mb-15 color-white wow animate__animated animate__fadeInUp"
                                                        data-wow-delay="0s">Hot topics</h5>
                                                    <p className="color-gray-500 mb-20 wow animate__animated animate__fadeInUp"
                                                       data-wow-delay=".3s">Don't miss out on the latest news about Travel
                                                        tips, Hotels review, Food guide...</p>
                                                    <div
                                                        className="box-buttons-slider position-relative wow animate__animated animate__zoomIn">
                                                        <div
                                                            className="swiper-button-prev swiper-button-prev-style-1"></div>
                                                        <div
                                                            className="swiper-button-next swiper-button-next-style-1"></div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-10">
                                                    <div className="box-swiper">
                                                        <div className="swiper-container swiper-group-5">
                                                            <div className="swiper-wrapper">
                                                                <div className="swiper-slide">
                                                                    <div className="card-style-1"><a
                                                                        href="blog-archive.html">
                                                                        <div className="card-image"><img
                                                                            src={sport}
                                                                            alt="Genz"/>
                                                                            <div className="card-info">
                                                                                <div className="info-bottom">
                                                                                    <h6 className="color-white mb-5">Sport</h6>
                                                                                    <p className="text-xs color-gray-500">38
                                                                                        Articles</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <div className="card-style-1"><a
                                                                        href="blog-archive.html">
                                                                        <div className="card-image"><img
                                                                            src={travel}
                                                                            alt="Genz"/>
                                                                            <div className="card-info">
                                                                                <div className="info-bottom">
                                                                                    <h6 className="color-white mb-5">Travel</h6>
                                                                                    <p className="text-xs color-gray-500">63
                                                                                        Articles</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <div className="card-style-1"><a
                                                                        href="blog-archive.html">
                                                                        <div className="card-image"><img
                                                                            src={desisn}
                                                                            alt="Genz"/>
                                                                            <div className="card-info">
                                                                                <div className="info-bottom">
                                                                                    <h6 className="color-white mb-5">Design</h6>
                                                                                    <p className="text-xs color-gray-500">78
                                                                                        Articles</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <div className="card-style-1"><a
                                                                        href="blog-archive.html">
                                                                        <div className="card-image"><img
                                                                            src={movie}
                                                                            alt="Genz"/>
                                                                            <div className="card-info">
                                                                                <div className="info-bottom">
                                                                                    <h6 className="color-white mb-5">Movie</h6>
                                                                                    <p className="text-xs color-gray-500">125
                                                                                        Articles</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <div className="card-style-1"><a
                                                                        href="blog-archive.html">
                                                                        <div className="card-image"><img
                                                                            src={lifestyle}
                                                                            alt="Genz"/>
                                                                            <div className="card-info">
                                                                                <div className="info-bottom">
                                                                                    <h6 className="color-white mb-5">Lifestyle</h6>
                                                                                    <p className="text-xs color-gray-500">78
                                                                                        Articles</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Posts/>
                                    <div className="text-center mb-50"><a
                                        className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn">
                                        Show More Posts
                                        <i><CaretRightFilled/></i></a></div>
                                    <PopularTags/>
                                    <RecentPosts/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            <Loader/>
        </>
    );
}

export default Main