import logo from "../assets/imgs/template/logo.svg";
import gallery from "../assets/imgs/page/homepage1/gallery.png";
import gallery2 from "../assets/imgs/page/homepage1/gallery2.png";
import gallery3 from "../assets/imgs/page/homepage1/gallery3.png";
import gallery4 from "../assets/imgs/page/homepage1/gallery4.png";
import gallery5 from "../assets/imgs/page/homepage1/gallery5.png";
import gallery6 from "../assets/imgs/page/homepage1/gallery6.png";
import gallery7 from "../assets/imgs/page/homepage1/gallery7.png";
import gallery8 from "../assets/imgs/page/homepage1/gallery8.png";
import gallery9 from "../assets/imgs/page/homepage1/gallery9.png";

function BottomGallery() {
    return (
        <>
            <div className="box-sidebar bg-gray-850 border-gray-800">
                <div className="head-sidebar"><a href="index.html"><img
                    src={logo} alt="Genz"/></a>
                    <h6 className="color-gray-700">Follow us on instagram</h6>
                </div>
                <div className="content-sidebar">
                    <div className="row mt-30 mb-10">
                        <div
                            className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                            <a href="#"><img className="bdrd-8"
                                             src={gallery}
                                             alt="Genz"/></a></div>
                        <div
                            className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                            <a href="#"><img className="bdrd-8"
                                             src={gallery2}
                                             alt="Genz"/></a></div>
                        <div
                            className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                            <a href="#"><img className="bdrd-8"
                                             src={gallery3}
                                             alt="Genz"/></a></div>
                        <div
                            className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                            <a href="#"><img className="bdrd-8"
                                             src={gallery4}
                                             alt="Genz"/></a></div>
                        <div
                            className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                            <a href="#"><img className="bdrd-8"
                                             src={gallery5}
                                             alt="Genz"/></a></div>
                        <div
                            className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                            <a href="#"><img className="bdrd-8"
                                             src={gallery6}
                                             alt="Genz"/></a></div>
                        <div
                            className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                            <a href="#"><img className="bdrd-8"
                                             src={gallery7}
                                             alt="Genz"/></a></div>
                        <div
                            className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                            <a href="#"><img className="bdrd-8"
                                             src={gallery8}
                                             alt="Genz"/></a></div>
                        <div
                            className="col-sm-4 col-4 mb-20 wow animate__animated animate__fadeIn">
                            <a href="#"><img className="bdrd-8"
                                             src={gallery9}
                                             alt="Genz"/></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BottomGallery