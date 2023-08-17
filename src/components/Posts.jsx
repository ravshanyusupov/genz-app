import new2 from "../assets/imgs/page/homepage2/news2.png";
import author from "../assets/imgs/page/homepage2/author.png";
import news1 from "../assets/imgs/page/homepage2/news1.png";
import author2 from "../assets/imgs/page/homepage2/author2.png";
import news3 from "../assets/imgs/page/homepage2/news3.png";
import author3 from "../assets/imgs/page/homepage1/author3.png";
import news4 from "../assets/imgs/page/homepage2/news4.png";
import author4 from "../assets/imgs/page/homepage1/author4.png";
import news5 from "../assets/imgs/page/homepage2/news5.png";
import author5 from "../assets/imgs/page/homepage1/author5.png";
import api from "../axios.js";
import {useEffect} from "react";

function Posts() {
    const getPosts = async () => {
        await api.get('posts')
             .then(res => console.log(res))
             .catch(err => console.log(err))
    }
    useEffect(() => {
        // getPosts()
    }, []);
    return (
        <>
            <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Editor's
                picked</h2>
            <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Featured
                and highly rated articles</p>
            <div className="row mt-70">
                <div className="col-lg-6 wow animate__animated animate__fadeIn">
                    <div className="card-blog-1 hover-up">
                        <div className="card-image mb-20"><a className="post-type"
                                                             href="blog-archive.html"></a><a
                            href="single-sidebar.html"><img
                            src={new2} alt="Genz"/></a></div>
                        <div className="card-info">
                            <div className="row">
                                <div className="col-7"><a className="color-gray-700 text-sm"
                                                          href="blog-archive.html"> #Travel</a><a
                                    className="color-gray-700 text-sm"
                                    href="blog-archive.html"> #Lifestyle</a>
                                </div>
                                <div className="col-5 text-end"><span
                                    className="color-gray-700 text-sm timeread">3 mins read</span>
                                </div>
                            </div>
                            <a href="single-sidebar.html">
                                <h4 className="color-white mt-20"> Self-observation is the first
                                    step of inner unfolding</h4></a>
                            <div className="row align-items-center mt-25">
                                <div className="col-7">
                                    <div className="box-author"><img
                                        src={author} alt="Genz"/>
                                        <div className="author-info">
                                            <h6 className="color-gray-700">Joseph</h6><span
                                            className="color-gray-700 text-sm">25 Nov 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 text-end"><a
                                    className="readmore color-gray-500 text-sm"
                                    href="single-sidebar.html"><span>Read more</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow animate__animated animate__fadeIn"
                     data-wow-delay=".3s">
                    <div className="card-blog-1 hover-up">
                        <div className="card-image mb-20"><a className="post-type"
                                                             href="blog-archive.html"></a><a
                            href="single-sidebar.html"><img
                            src={news1} alt="Genz"/></a></div>
                        <div className="card-info">
                            <div className="row">
                                <div className="col-7"><a className="color-gray-700 text-sm"
                                                          href="blog-archive.html"> #Design</a><a
                                    className="color-gray-700 text-sm"
                                    href="blog-archive.html"> #Movie</a>
                                </div>
                                <div className="col-5 text-end"><span
                                    className="color-gray-700 text-sm timeread">6 mins read</span>
                                </div>
                            </div>
                            <a href="single-sidebar.html">
                                <h4 className="color-white mt-20"> Self-observation is the first
                                    step of inner unfolding</h4></a>
                            <div className="row align-items-center mt-25">
                                <div className="col-7">
                                    <div className="box-author"><img
                                        src={author2} alt="Genz"/>
                                        <div className="author-info">
                                            <h6 className="color-gray-700">Joseph</h6><span
                                            className="color-gray-700 text-sm">27 Sep 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 text-end"><a
                                    className="readmore color-gray-500 text-sm"
                                    href="single-sidebar.html"><span>Read more</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow animate__animated animate__fadeIn"
                     data-wow-delay=".1s">
                    <div className="card-blog-1 hover-up">
                        <div className="card-image mb-20"><a className="post-type"
                                                             href="blog-archive.html"></a><a
                            href="single-sidebar.html"><img
                            src={news3} alt="Genz"/></a></div>
                        <div className="card-info">
                            <div className="row">
                                <div className="col-7"><a className="color-gray-700 text-sm"
                                                          href="blog-archive.html"> #Design</a><a
                                    className="color-gray-700 text-sm"
                                    href="blog-archive.html"> #Movie</a>
                                </div>
                                <div className="col-5 text-end"><span
                                    className="color-gray-700 text-sm timeread">6 mins read</span>
                                </div>
                            </div>
                            <a href="single-sidebar.html">
                                <h5 className="color-white mt-20"> Self-observation is the first
                                    step of inner unfolding</h5></a>
                            <div className="row align-items-center mt-25">
                                <div className="col-7">
                                    <div className="box-author"><img
                                        src={author3} alt="Genz"/>
                                        <div className="author-info">
                                            <h6 className="color-gray-700">Joseph</h6><span
                                            className="color-gray-700 text-sm">27 Sep 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 text-end"><a
                                    className="readmore color-gray-500 text-sm"
                                    href="single-sidebar.html"><span>Read more</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow animate__animated animate__fadeIn"
                     data-wow-delay=".3s">
                    <div className="card-blog-1 hover-up">
                        <div className="card-image mb-20"><a className="post-type"
                                                             href="blog-archive.html"></a><a
                            href="single-sidebar.html"><img
                            src={news4} alt="Genz"/></a></div>
                        <div className="card-info">
                            <div className="row">
                                <div className="col-7"><a className="color-gray-700 text-sm"
                                                          href="blog-archive.html"> #Design</a><a
                                    className="color-gray-700 text-sm"
                                    href="blog-archive.html"> #Movie</a>
                                </div>
                                <div className="col-5 text-end"><span
                                    className="color-gray-700 text-sm timeread">6 mins read</span>
                                </div>
                            </div>
                            <a href="single-sidebar.html">
                                <h5 className="color-white mt-20"> Self-observation is the first
                                    step of inner unfolding</h5></a>
                            <div className="row align-items-center mt-25">
                                <div className="col-7">
                                    <div className="box-author"><img
                                        src={author4} alt="Genz"/>
                                        <div className="author-info">
                                            <h6 className="color-gray-700">Joseph</h6><span
                                            className="color-gray-700 text-sm">27 Sep 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 text-end"><a
                                    className="readmore color-gray-500 text-sm"
                                    href="single-sidebar.html"><span>Read more</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow animate__animated animate__fadeIn"
                     data-wow-delay=".5s">
                    <div className="card-blog-1 hover-up">
                        <div className="card-image mb-20"><a className="post-type"
                                                             href="blog-archive.html"></a><a
                            href="single-sidebar.html"><img
                            src={news5} alt="Genz"/></a></div>
                        <div className="card-info">
                            <div className="row">
                                <div className="col-7"><a className="color-gray-700 text-sm"
                                                          href="blog-archive.html"> #Design</a><a
                                    className="color-gray-700 text-sm"
                                    href="blog-archive.html"> #Movie</a>
                                </div>
                                <div className="col-5 text-end"><span
                                    className="color-gray-700 text-sm timeread">6 mins read</span>
                                </div>
                            </div>
                            <a href="single-sidebar.html">
                                <h5 className="color-white mt-20"> Self-observation is the first
                                    step of inner unfolding</h5></a>
                            <div className="row align-items-center mt-25">
                                <div className="col-7">
                                    <div className="box-author"><img
                                        src={author5} alt="Genz"/>
                                        <div className="author-info">
                                            <h6 className="color-gray-700">Joseph</h6><span
                                            className="color-gray-700 text-sm">27 Sep 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 text-end"><a
                                    className="readmore color-gray-500 text-sm"
                                    href="single-sidebar.html"><span>Read more</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Posts