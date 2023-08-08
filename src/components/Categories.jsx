import design from "../assets/imgs/page/homepage1/design.png";
import LastComments from "./LastComments.jsx";
import BottomGallery from "./BottomGallery.jsx";

function Categories() {
    return (
        <>
            <div className="col-lg-4">
                <div className="sidebar">
                    <div className="box-sidebar bg-gray-850 border-gray-800">
                        <div className="head-sidebar">
                            <h5 className="line-bottom">Categories</h5>
                        </div>
                        <div className="content-sidebar">
                            <div className="list-cats">
                                <div
                                    className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                    <div className="cat-left">
                                        <div className="image-cat"><a
                                            href="blog-archive.html"><img
                                            src={design}
                                            alt="Genz"/></a></div>
                                        <div className="info-cat"><a
                                            className="color-gray-500 text-xl"
                                            href="blog-archive.html">Travel Tips</a></div>
                                    </div>
                                    <div className="cat-right"><a
                                        className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                        href="blog-archive.html">36
                                        posts</a></div>
                                </div>
                                <div
                                    className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                    <div className="cat-left">
                                        <div className="image-cat"><a
                                            href="blog-archive-2.html"><img
                                            src={design}
                                            alt="Genz"/></a></div>
                                        <div className="info-cat"><a
                                            className="color-gray-500 text-xl"
                                            href="blog-archive-2.html">Technology</a></div>
                                    </div>
                                    <div className="cat-right"><a
                                        className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                        href="blog-archive-2.html">14
                                        posts</a></div>
                                </div>
                                <div
                                    className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                    <div className="cat-left">
                                        <div className="image-cat"><a
                                            href="blog-archive-3.html"><img
                                            src={design}
                                            alt="Genz"/></a></div>
                                        <div className="info-cat"><a
                                            className="color-gray-500 text-xl"
                                            href="blog-archive-3.html">Business</a></div>
                                    </div>
                                    <div className="cat-right"><a
                                        className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                        href="blog-archive-3.html">87
                                        posts</a></div>
                                </div>
                                <div
                                    className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                    <div className="cat-left">
                                        <div className="image-cat"><a
                                            href="blog-archive-4.html"><img
                                            src={design}
                                            alt="Genz"/></a></div>
                                        <div className="info-cat"><a
                                            className="color-gray-500 text-xl"
                                            href="blog-archive-4.html">Food</a></div>
                                    </div>
                                    <div className="cat-right"><a
                                        className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                        href="blog-archive-4.html">125
                                        posts</a></div>
                                </div>
                                <div
                                    className="item-cats border-gray-800 wow animate__animated animate__fadeIn">
                                    <div className="cat-left">
                                        <div className="image-cat"><a
                                            href="blog-archive-5.html"><img
                                            src={design}
                                            alt="Genz"/></a></div>
                                        <div className="info-cat"><a
                                            className="color-gray-500 text-xl"
                                            href="blog-archive-5.html">Lifestyle</a></div>
                                    </div>
                                    <div className="cat-right"><a
                                        className="btn btn-small text-sm color-gray-500 bg-gray-800"
                                        href="blog-archive-5.html">6
                                        posts</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<PopularPosts/>*/}
                    <LastComments/>
                    <BottomGallery/>
                </div>
            </div>
        </>
    )
}

export default Categories