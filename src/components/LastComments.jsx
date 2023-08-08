import author8 from "../assets/imgs/page/homepage1/author8.png";
import api from '../axios.js'
import {useEffect, useState} from "react";

function LastComments() {
    const [comments, setComments] = useState([])
    const getComments = async () => {
        await api.get('last_comments')
            .then(res => {
                const last_5 = (res.data.data).sort()
                setComments(last_5)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getComments()
    }, [])
    let i = 0
    return (
        <>
            <div className="box-sidebar bg-gray-850 border-gray-800">
                <div className="head-sidebar wow animate__animated animate__fadeIn">
                    <h5 className="line-bottom">Last Comments</h5>
                </div>
                {comments.map(item => (
                    <div className="content-sidebar" key={item.id}>
                        <div className="list-comments">
                            <div
                                className="item-comment border-gray-800 wow animate__animated animate__fadeIn">
                                <p className="color-gray-500 mb-20">“ {item.body} “</p>
                                <div className="box-author-small"><img
                                    src={author8} alt="Genz"/>
                                    <div className="author-info"><span
                                        className="d-block color-gray-700 text-sm">{item.email}</span><span
                                        className="color-gray-700 text-xs">15 April 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LastComments