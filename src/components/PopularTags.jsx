import tag1 from "../assets/imgs/page/homepage1/tag1.png";
import api from '../axios.js'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function PopularTags() {
    const [tags, setTags] = useState([])
    const getPopularTags = async () => {
        await api.get('popular_tags')
            .then(res => setTags(res.data.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getPopularTags()
    }, [])
    return (
        <>
            <h2 className="color-linear d-inline-block mb-10 wow animate__animated animate__fadeInUp">Popular
                Tags</h2>
            <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">Most
                searched keywords</p>
            <div className="row mt-70 mb-50">
                {tags.map(item => (
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" key={item.id}>
                        <div
                            className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeIn"
                            data-wow-delay="0s">
                            <div className="card-image"><Link to={`/category/${item.id}`}><img
                                src={item.image ? item.image : tag1} alt={item.name}/></Link></div>
                            <div className="card-info"><Link className="color-gray-500"
                                                          to={`/category/${item.id}`}>{item.name.charAt(0).toUpperCase()+item.name.substring(1)}</Link></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PopularTags