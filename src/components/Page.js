import { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap"

const Page = ({ pages, setCurrentPage, sortedEmployee, currentEmployee }) => {


    const numOfPages = [];

    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
        setCurrentPage(currentButton);
    }, [currentButton, setCurrentPage])

    return (
        <div className="clearfix">
            <div className="hint-text">Showing <b>{currentEmployee.length}</b> out of <b>{sortedEmployee.length}</b> entries</div>
            <ul className="pagination">
                < li onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)} className={`${currentButton === 1 ? 'page-item  disabled' : 'page-item'}`} > <a href="#!">Previous</a></li >
                {
                    numOfPages.map((pages, index) => {
                        return (
                            <li onClick={() => setCurrentButton(pages)} key={index} className={`${currentButton === pages ? 'page-item active' : 'page-item'}`} > <a href="#!" className="page-link">{pages}</a></li>
                        )
                    })
                }
                < li onClick={() => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)} className="`${currentButton === numOfPages.length ? 'page-item disabled:'page-item'}` " > <a href="#!">Next</a></li >

            </ul>
        </div>
    )
}

export default Page

    // <li className="page-item"><a href="#!" className="page-link">2</a></li>
    //             <li className="page-item active"><a href="#!" className="page-link">3</a></li>
    //             <li className="page-item"><a href="#!" className="page-link">4</a></li>
    //             <li className="page-item"><a href="#!" className="page-link">5</a></li>
    //             <li className="page-item"><a href="#!" className="page-link">Next</a></li>