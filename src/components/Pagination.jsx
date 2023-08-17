import {CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";
import {useState} from "react";
import _ from 'lodash'

function Pagination({handlePageChange, totalPages}) {
    const pageCount = _.range(1, totalPages + 1)
    let [currentPage, setCurrentPage] = useState(1)
    const setPageChange = (action) => {
        switch (action.type) {
            case 'DECREMENT':
                if (currentPage <= 1){
                    setCurrentPage(1)
                }else {
                    setCurrentPage(currentPage -= 1)
                }
                handlePageChange(currentPage)
                break
            case 'ITEM':
                handlePageChange(action.payload)
                setCurrentPage(action.payload)
                break
            case 'INCREMENT':
                if (currentPage >= totalPages){
                }else {
                    setCurrentPage(currentPage += 1)
                }
                handlePageChange(currentPage)
                break
            default:
                break
        }
    }
    return (
        <>
            <nav className="mb-50">
                <ul className="pagination">
                    <li className="page-item wow animate__animated animate__fadeIn"
                        data-wow-delay=".0s"><a
                        onClick={() => setPageChange({type: 'DECREMENT'})}
                        className="page-link"
                    >
                        <CaretLeftFilled/>
                    </a>
                    </li>
                    {pageCount.map((item) => (
                        <li
                            className={`page-item wow animate__animated animate__fadeIn ${currentPage === item ? 'active' : ''}`}
                            key={item}
                            onClick={() => setPageChange({type: 'ITEM', payload: item})}
                            data-wow-delay=".1s">
                            <a className="page-link"
                            >{item}</a></li>
                    ))}
                    <li
                        className="page-item wow animate__animated animate__fadeIn"
                        data-wow-delay=".5s">
                        <a className="page-link" onClick={() => setPageChange({type: 'INCREMENT'})}>
                            <CaretRightFilled/>
                        </a></li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination


