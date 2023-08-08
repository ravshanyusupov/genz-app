import post4 from "../assets/imgs/page/homepage1/img-post4.jpg";
import LastComments from "./LastComments.jsx";
import BottomGallery from "./BottomGallery.jsx";
import api from '../axios.js'
import {useEffect, useState} from "react";

function PopularPosts() {
    const [posts, setPosts] = useState([])
    const getPost = async () => {
        await api.get('popular_posts')
            .then(res => {
                const most = (res.data.data).sort()
                setPosts(most.slice(0,5))
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getPost()
    }, [])
    return (
        <>
            <div className="col-lg-4">
                <div className="sidebar">
                    <div className="box-sidebar bg-gray-850 border-gray-800">
                        <div className="head-sidebar wow animate__animated animate__fadeIn">
                            <h5 className="line-bottom">Popular Posts</h5>
                        </div>
                        <div className="content-sidebar">
                            <div className="list-posts">
                                {posts.map(item => (
                                    <div
                                        className="item-post wow animate__animated animate__fadeIn" key={item.id}>
                                        <div className="image-post"><a
                                            href="single-sidebar.html"><img
                                            src={item.image ? item.image : post4}
                                            alt="Genz"/></a></div>
                                        <div className="info-post border-gray-800"><a
                                            href="single-sidebar.html">
                                            <h6 className="color-white">{item.title}</h6></a><span
                                            className="color-gray-700">{item.read_time} mins read</span>
                                            <ul className="d-inline-block">
                                                <li className="color-gray-700">{item.published.substring(0,10)}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <LastComments/>
                    <BottomGallery/>
                </div>
            </div>
        </>
    )
}

export default PopularPosts