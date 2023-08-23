import new2 from "../assets/imgs/page/homepage2/news2.png";
import author from "../assets/imgs/page/homepage2/author.png";
import news5 from "../assets/imgs/page/homepage2/news5.png";
import author5 from "../assets/imgs/page/homepage1/author5.png";
import api from "../axios.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Loader from "./Loader.jsx";

function Posts() {
    const [addPost, setAddPost] = useState(5)
    const [posts, setPosts] = useState()
    const [loader, setLoader] = useState(false)
    const col6Posts = posts?.slice(0,2)
    const col4Posts = posts?.slice(2,addPost)
    const getPosts = async () => {
        setLoader(true)
        await api.get('featured_posts')
             .then(res => {
                 let data = res.data.data.sort((a,b) => b.views - a.views)
                 console.log(data)
                 setPosts(data)
             })
             .catch(err => console.log(err))
        setLoader(false)
    }
    useEffect(() => {
        getPosts()
    }, []);
    return (
        <>
            {
                loader
                ? <Loader/>
                    : <>
                        <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Editor's
                            picked</h2>
                        <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Featured
                            and highly rated articles</p>
                        <div className="row mt-70">
                            {
                                col6Posts?.map(post => (
                                    <div className="col-lg-6 wow animate__animated animate__fadeIn" key={post.id}>
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><a className="post-type"></a><Link
                                                to={`/single-post/${post.id}`}><img
                                                src={post.image ? post.image : new2} alt="Genz"/></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><a className="color-gray-700 text-sm"
                                                                              href="blog-archive.html"> #Travel</a><a
                                                        className="color-gray-700 text-sm"
                                                        href="blog-archive.html"> #Lifestyle</a>
                                                    </div>
                                                    <div className="col-5 text-end"><span
                                                        className="color-gray-700 text-sm timeread">{post.read_time} mins read</span>
                                                    </div>
                                                </div>
                                                <Link to={`/single-post/${post.id}`}>
                                                    <h4 className="color-white mt-20">{post.title}</h4></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img
                                                            src={author} alt="Genz"/>
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">{post.username}</h6><span
                                                                className="color-gray-700 text-sm">{post.published_at.slice(0,10)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link
                                                        className="readmore color-gray-500 text-sm"
                                                        to={`/single-post/${post.id}`}><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                col4Posts?.map(post => (
                                    <div className="col-lg-4 wow animate__animated animate__fadeIn"
                                         data-wow-delay=".5s">
                                        <div className="card-blog-1 hover-up">
                                            <div className="card-image mb-20"><a className="post-type"></a><Link
                                                to={`/single-post/${post.id}`}><img
                                                src={news5} alt="Genz"/></Link></div>
                                            <div className="card-info">
                                                <div className="row">
                                                    <div className="col-7"><a className="color-gray-700 text-sm"
                                                                              href="blog-archive.html"> #Design</a><a
                                                        className="color-gray-700 text-sm"
                                                        href="blog-archive.html"> #Movie</a>
                                                    </div>
                                                    <div className="col-5 text-end"><span
                                                        className="color-gray-700 text-sm timeread">{post.read_time} mins read</span>
                                                    </div>
                                                </div>
                                                <Link to={`/single-post/${post.id}`}>
                                                    <h5 className="color-white mt-20">{post.title}</h5></Link>
                                                <div className="row align-items-center mt-25">
                                                    <div className="col-7">
                                                        <div className="box-author"><img
                                                            src={author5} alt="Genz"/>
                                                            <div className="author-info">
                                                                <h6 className="color-gray-700">{post.username}</h6><span
                                                                className="color-gray-700 text-sm">{post.published_at.slice(0,10)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5 text-end"><Link
                                                        className="readmore color-gray-500 text-sm"
                                                        to={`/single-post/${post.id}`}><span>Read more</span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
            }
            <div className="text-center mb-50">
                {
                    addPost === 5
                        ? <a
                            className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn"
                            onClick={() => setAddPost(8)}
                        >Show More Posts</a>
                        : <a
                            className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn"
                            onClick={() => setAddPost(5)}
                        >Show Less Posts</a>
                }
            </div>
        </>
    )
}
export default Posts