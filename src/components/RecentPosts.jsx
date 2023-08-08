import img_news2 from "../assets/imgs/page/homepage1/img-news-2.jpg";
import {CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";
import PopularPosts from "./PopularPosts.jsx";
import api from '../axios.js'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Pagination from "./Pagination.jsx";
function RecentPosts() {
    const [posts, setPosts] = useState([]);

    //////// pagination /////////
    const itemsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        console.log(pageNumber)
    };
    const startIndex = (currentPage - 1) * itemsPerPage; // 0
    const endIndex = startIndex + itemsPerPage; // 2
    const displayedItems = posts.slice(startIndex, endIndex);
    //////// pagination /////////


    const getPosts = async () => {
        await api.get('recent_posts')
            .then(res => setPosts(res.data.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getPosts()
    },[])
    return (
        <>
            <div className="row mt-70">
                <div className="col-lg-8">
                    <h2 className="color-linear d-inline-block mb-10">Recent posts</h2>
                    <p className="text-lg color-gray-500">Don't miss the latest trends</p>
                    <div className="box-list-posts mt-70">

                        {displayedItems.map(item => (
                            <div className="card-list-posts wow animate__animated animate__fadeIn" key={item.id}>
                            <div className="card-image hover-up"><Link to="/post"><img
                                src={item.image ? item.image : img_news2} alt="Genz"/></Link>
                            </div>
                            <div className="card-info"><a
                                className="btn btn-tag bg-gray-800 hover-up"
                                href="blog-archive.html">Working Tips</a><a
                                href="single-sidebar.html">
                                <h4 className="mt-15 mb-20 color-white">{item.title}</h4></a>
                                <p className="color-gray-500">{item.description}</p>
                                <div className="row mt-20">
                                    <div className="col-7">
                                        {item.tags.map(tag => (
                                            <a className="color-gray-700 text-sm " key={tag.id}  href="#">#{tag.name}<br/></a>
                                        ))}
                                    </div>
                                    <div className="col-5 text-end"><span
                                        className="color-gray-700 text-sm timeread">{item.read_time} mins read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                    <Pagination handlePageChange={handlePageChange} displayedItems={displayedItems}/>
                </div>
                <PopularPosts/>
            </div>
        </>
    )
}

export default RecentPosts