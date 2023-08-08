import loader from "../assets/imgs/template/favicon.svg";

function Loader() {
    setTimeout(() => {
        const main = document.getElementById('preloader-active')
        main.style.display = 'none'
    },500)
    return(
        <>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="text-center"><img className="mb-10" src={loader}
                                                          alt="GenZ"/>
                            <div className="preloader-dots"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Loader