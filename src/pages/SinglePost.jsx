import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Link, useParams} from "react-router-dom";
import img12 from "../assets/imgs/page/interviews/img12.jpg";
import author from '../assets/imgs/page/about/author2.png'
import cat5 from '../assets/imgs/page/healthy/cat5.png'
import PopularPosts from "../components/PopularPosts.jsx";
import api from "../axios.js";
import {useEffect, useState} from "react";
import Loader from "../components/Loader.jsx";

function SinglePost() {
    const {id} = useParams();
    const [tagCount, setTagCount] = useState([])
    const [loader, setLoader] = useState(false)

    const categoryCount = async () => {
        setLoader(true)
        await api.get('categories')
            .then(res => {
                let data = res.data.data.sort((a, b) => b.posts - a.posts)
                setTagCount(data.slice(0, 5))
            })
            .catch(err => console.log(err))
        setLoader(false)
    }
    useEffect(() => {
        categoryCount()
    }, [id]);
    return (
        <>
            {
                loader ? <Loader/>
                    : <>
                        <Navbar/>
                        <main className="main">
                            <div className="cover-home3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-1"></div>
                                        <div className="col-xl-10 col-lg-12">
                                            <div className="pt-30 border-bottom border-gray-800 pb-20">
                                                <div className="box-breadcrumbs">
                                                    <ul className="breadcrumb">
                                                        <li><Link className="home" to="/">Home</Link></li>
                                                        <li><a>Post</a></li>
                                                        <li>
                                                            <span>Digital Design That Will Help You Start Your Business</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row mt-50 align-items-end">
                                                <div className="col-lg-9 col-md-8">
                                                    <h2 className="color-linear mb-30">Digital Design That Will Help You
                                                        Start Your Business123</h2>
                                                    <div className="box-author mb-20"><img src={author} alt="Genz"/>
                                                        <div className="author-info">
                                                            <h6 className="color-gray-700">William Randolph</h6><span
                                                            className="color-gray-700 text-sm mr-30">25 April 2022</span><span
                                                            className="color-gray-700 text-sm">3 mins to read</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4">
                                                    <div className="box-share border-gray-800">
                                                        <h6 className="d-inline-block color-gray-500 mr-10">Share</h6><a
                                                        className="icon-media icon-fb" href="#"></a><a
                                                        className="icon-media icon-tw" href="#"></a><a
                                                        className="icon-media icon-printest" href="#"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="content-detail border-gray-800">
                                                        <p className="text-xl color-gray-500">The fancy moon going in little
                                                            artist painting. Thirty days of lavender in the dreamy light
                                                            inside. Other perfect oh plants, for and again. I’ve honey
                                                            feeling. Caring dreamland projects noteworthy than minimal,
                                                            their it oh pretty feeling may. Include pink be.</p>
                                                        <div className="mt-20 mb-20"><img className="img-bdrd-16"
                                                                                          src={img12} alt="Genz"/></div>
                                                        <h3 className="color-white mb-30">Use your headings</h3>
                                                        <p className="text-lg color-gray-500">Thirty there & time wear
                                                            across days, make inside on these you. Can young a really, roses
                                                            blog small of song their dreamy life pretty? Because really duo
                                                            living to noteworthy bloom bell. Transform clean daydreaming
                                                            cute twenty process rooms cool. White white dreamy dramatically
                                                            place everything although. Place out apartment afternoon
                                                            whimsical kinder, little romantic joy we flowers handmade.
                                                            Thirty she a studio of she whimsical projects, afternoon effect
                                                            going an floated maybe.</p>
                                                        <div className="bg-gray-850 box-quote">
                                                            <h3 className="color-gray-500">Blandit consequat feugiat sed
                                                                dapibus lorem diam nibh venenatis sodales pulvinar augue
                                                                adipiscing turpis nulla sit tincidunt non lacus sit amet et
                                                                white dreamy dramatically place.</h3>
                                                            <div className="d-inline-block mt-40">
                                                                <div className="box-author"><img src={author} alt="Genz"/>
                                                                    <div className="author-info">
                                                                        <h6 className="color-gray-700">Ronald Richards</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box-tags"><a
                                                        className="btn btn-tags bg-gray-850 border-gray-800 mr-10"
                                                        href="blog-archive.html">#Nature</a><a
                                                        className="btn btn-tags bg-gray-850 border-gray-800 mr-10"
                                                        href="blog-archive.html">#Beauty</a><a
                                                        className="btn btn-tags bg-gray-850 border-gray-800 mr-10"
                                                        href="blog-archive.html">#Travel Tips</a><a
                                                        className="btn btn-tags bg-gray-850 border-gray-800"
                                                        href="blog-archive.html">#House</a></div>
                                                    <div className="box-comments border-gray-800">
                                                        <h3 className="text-heading-2 color-gray-400 color-gray-300">Comments</h3>
                                                        <div className="list-comments-single">
                                                            <div className="item-comment">
                                                                <div className="comment-left">
                                                                    <div className="box-author mb-20"><img src={author}
                                                                                                           alt="Genz"/>
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Robert Fox</h6>
                                                                            <span className="color-gray-700 text-sm mr-30">August 25, 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-right">
                                                                    <div
                                                                        className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White
                                                                        white dreamy drama tically place everything
                                                                        although. Place out apartment afternoon whimsical
                                                                        kinder, little romantic joy we flowers handmade.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="item-comment">
                                                                <div className="comment-left">
                                                                    <div className="box-author mb-20"><img src={img12}
                                                                                                           alt="Genz"/>
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Jenny Wilson</h6>
                                                                            <span className="color-gray-700 text-sm mr-30">August 25, 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-right">
                                                                    <div
                                                                        className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White
                                                                        white dreamy drama tically place everything
                                                                        although. Place out apartment afternoon whimsical
                                                                        kinder, little romantic joy we flowers handmade.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="item-comment item-comment-sub">
                                                                <div className="comment-left">
                                                                    <div className="box-author mb-20"><img src={author}
                                                                                                           alt="Genz"/>
                                                                        <div className="author-info">
                                                                            <h6 className="color-gray-700">Eleanor Pena</h6>
                                                                            <span className="color-gray-700 text-sm mr-30">August 25, 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-right">
                                                                    <div
                                                                        className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">White
                                                                        white dreamy drama tically place everything
                                                                        although. Place out apartment afternoon whimsical
                                                                        kinder, little romantic joy we flowers handmade.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box-form-comments mb-50">
                                                        <h4 className="text-heading-4 color-gray-400 mb-40">Leave a
                                                            comment</h4>
                                                        <div className="box-forms">
                                                            <form action="#">
                                                                <textarea
                                                                    className="form-control bg-gray-850 border-gray-800 bdrd16 color-gray-500"
                                                                    name="comment" rows="5"
                                                                    placeholder="Write a comment"></textarea>
                                                                <div className="row mt-20">
                                                                    <div className="col-sm-6 mb-20">
                                                                        <input className="cb-agree" type="checkbox"/>
                                                                        <p className="text-sm color-gray-500 pl-25">Save my
                                                                            name, email, and website in this browser for the
                                                                            next time I comment.</p>
                                                                    </div>
                                                                    <div className="col-sm-6 text-end"><a
                                                                        className="btn btn-linear">Post Comment</a></div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="sidebar">
                                                        <div className="box-sidebar bg-gray-850 border-gray-800">
                                                            <div className="head-sidebar">
                                                                <h5 className="line-bottom">Categories</h5>
                                                            </div>
                                                            <div className="content-sidebar">
                                                                <div className="list-cats">
                                                                    {
                                                                        tagCount.map(tag => (
                                                                            <div
                                                                                className="item-cats border-gray-800 wow animate__animated animate__fadeIn"
                                                                                key={tag.id}>
                                                                                <div className="cat-left">
                                                                                    <div className="image-cat"><a
                                                                                        href="#"><img
                                                                                        src={tag.image ? tag.image : cat5}
                                                                                        alt="Genz"/></a></div>
                                                                                    <div className="info-cat"><a
                                                                                        className="color-gray-500 text-xl"
                                                                                        href="#">{tag.name}</a></div>
                                                                                </div>
                                                                                <div className="cat-right"><a
                                                                                    className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                                                                    href="#">{tag.posts}
                                                                                    posts</a></div>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <PopularPosts/>
                                                        <div className="box-sidebar bg-gray-850 border-gray-800">
                                                            <div className="head-sidebar">
                                                                <h5 className="line-bottom d-inline-block wow animate__animated animate__fadeIn">Popular
                                                                    Tags</h5>
                                                            </div>
                                                            <div className="content-sidebar pb-20"><a
                                                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                                                href="blog-archive.html">Technology</a><a
                                                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                                                href="blog-archive.html">Travel</a><a
                                                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                                                href="blog-archive.html">Interior</a><a
                                                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                                                href="blog-archive.html">Minimal</a><a
                                                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                                                href="blog-archive.html">Plant</a><a
                                                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                                                href="blog-archive.html">Nature</a><a
                                                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                                                href="blog-archive.html">Business</a><a
                                                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                                                href="blog-archive.html">Animal</a><a
                                                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                                                href="blog-archive.html">Healthy</a><a
                                                                className="btn btn-tags bg-gray-850 border-gray-800 mr-10 mb-10 bdrd16 wow animate__animated animate__fadeIn"
                                                                href="blog-archive.html">Space</a></div>
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
            }
        </>
    )
}

export default SinglePost