import {CaretLeftFilled, CaretRightFilled} from "@ant-design/icons";
import {useState} from "react";

function Pagination({handlePageChange, displayedItems}) {
    return(
        <>
            <nav className="mb-50">
                <ul className="pagination">
                    <li className="page-item wow animate__animated animate__fadeIn"
                        data-wow-delay=".0s"><a
                        onClick={() => handlePageChange(2)}
                        className="page-link"
                        >
                            <CaretLeftFilled style={{marginTop: '-6px'}}/>
                    </a>
                    </li>
                    {displayedItems.map((item, index) => (
                               <li
                                   className="page-item wow animate__animated animate__fadeIn"
                                   data-wow-delay=".1s">
                                   <a className="page-link"
                                      onClick={() => handlePageChange(index + 1)}
                                   >{index + 1}</a></li>
                        ))}
                    <li className="page-item wow animate__animated animate__fadeIn"
                        data-wow-delay=".4s"><a className="page-link" href="#">...</a></li>
                    <li className="page-item wow animate__animated animate__fadeIn"
                        data-wow-delay=".5s"><a className="page-link" href="#">
                        <CaretRightFilled/>
                    </a></li>
                </ul>
            </nav>
        </>
    )
}
export default Pagination


