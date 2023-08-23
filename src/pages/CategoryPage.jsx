import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PopularTags from "../components/PopularTags.jsx";
import api from "../axios.js";
import {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import img12 from "../assets/imgs/page/interviews/img12.jpg";
import tag1 from "../assets/imgs/page/homepage1/tag1.png";
import Loader from "../components/Loader.jsx";


function CategoryPage() {
    const [loader, setLoader] = useState(false)
    const token = localStorage.getItem('token')
    const [tag, setTag] = useState({})
    const { id } = useParams();

    const getTag = async () => {
        setLoader(true)
        setTag([])
            await api.get(`tags/${id}`, {headers: {'Authorization': `Bearer ${token}`}})
            .then(res => {
                setTag(res.data.data)
                // console.log(res.data.data)
             })
            .catch(err => console.log(err))
        setLoader(false)
    }
    useEffect(() => {
        getTag()
    }, [id]);

    return(
            <>
                <Navbar/>
                {
                    loader
                        ? <Loader/>
                        : <main className="main">
                            <div className="cover-home3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-1"></div>
                                        <div className="col-xl-10 col-lg-12">

                                            <div className="row align-items-end mt-50">
                                                <div className="col-lg-7 mb-20">
                                                    <div className="d-inline-block position-relative">
                                                        <h1 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn">{tag.name?.charAt(0).toUpperCase()+tag.name?.substring(1)}</h1><span className="btn btn-linear-small btn-number-arts">{tag.posts?.length == 0 ? 'No posts' : tag.posts?.length == 1 ? '1 Post': `${tag.posts?.length} Posts`}</span>
                                                    </div>
                                                    <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi sed turpis vulputate viverra. Morbi ligula elit, hendrerit non nisl tincidunt, sodales consequat magna.</p>
                                                </div>
                                                <div className="col-lg-5 mb-20 text-start text-lg-end">
                                                    <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                                                        <ul className="breadcrumb">
                                                            <li><Link className="home" to="/">Home</Link></li>
                                                            <li><a>Category</a></li>
                                                            <li><span>{tag.name?.charAt(0).toUpperCase()+tag.name?.substring(1)}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="border-bottom border-gray-800 mt-10 mb-30"></div>
                                                </div>
                                            </div>
                                            <div className="mt-40 mb-50">
                                                </div>
                                            <div className="mb-70"></div>
                                            <div className="row mt-50 mb-10" data-masonry="{&quot;percentPosition&quot;: true }">
                                                {
                                                    tag.posts?.length > 0
                                                        ? tag.posts?.map(item => (
                                                                <div className="col-lg-4" key={item.id}>
                                                                    <div className="card-blog-1 border-gray-800 bg-gray-850 hover-up">
                                                                        <div className="card-image mb-20"><a className="post-type" href="#"></a><a href="single-sidebar.html"><img src={item.image ? item.image : img12} alt="Genz"/></a></div>
                                                                        <div className="card-info">
                                                                            <div className="row">
                                                                                <div className="col-7">
                                                                                    {item.tags.map(tag => (
                                                                                        <a key={tag.id} className="color-gray-700 text-sm" href="blog-archive.html">#{tag.name} </a>
                                                                                    ))}
                                                                                </div>
                                                                                <div className="col-5 text-end"><span className="color-gray-700 text-sm timeread">{item.read_time} mins read</span></div>
                                                                            </div><a href="single-sidebar.html">
                                                                            <h5 className="color-white mt-10">{item.title}</h5></a>
                                                                            <div className="row align-items-center mt-20">
                                                                                <div className="col-7">
                                                                                    <div className="box-author"><img src={item.image ? item.image : tag1} alt="Genz"/>
                                                                                        <div className="author-info">
                                                                                            <h6 className="color-gray-700">{item.username}</h6><span className="color-gray-700 text-sm">{item.published?.substring(0,10)}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-5 text-end"><a className="readmore color-gray-500 text-sm" href="single-sidebar.html"><span>Read more</span></a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        : <h1 className="color-white mb-20 color-linear wow animate__animated animate__fadeIn mb-40" style={{marginTop: '-50px'}}>No posts yet</h1>
                                                }
                                                {/*<nav className="mb-50">*/}
                                                {/*    <ul className="pagination">*/}
                                                {/*        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".0s"><a className="page-link page-prev" href="#"><i className="fi-rr-arrow-small-left"></i></a></li>*/}
                                                {/*        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".1s"><a className="page-link" href="#">1</a></li>*/}
                                                {/*        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".2s"><a className="page-link active" href="#">2</a></li>*/}
                                                {/*        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".3s"><a className="page-link" href="#">3</a></li>*/}
                                                {/*        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".4s"><a className="page-link" href="#">...</a></li>*/}
                                                {/*        <li className="page-item wow animate__animated animate__fadeIn" data-wow-delay=".5s"><a className="page-link page-next" href="#"><i className="fi-rr-arrow-small-right"></i></a></li>*/}
                                                {/*    </ul>*/}
                                                {/*</nav>*/}
                                            </div>
                                            <PopularTags/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <script src="assets/js/vendors/masonry.pkgd.min.js"></script>
                        </main>
                }
                <Footer/>
        </>
    )
}

export default CategoryPage