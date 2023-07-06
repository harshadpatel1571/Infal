import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-success shadow-lg p-3 SideBar">
                
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        {/* <Link to="/" className="nav-link active" aria-current="page">
                            Home
                        </Link> */}
                    </li>
                </ul>
                <div className='my-3'>
                    <Link to="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1">
                        <i className='fa fa-user p-2'></i>
                    </Link>
                </div>
                <div>
                    <Link to="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1">
                        <i className='fa fa-gear p-2'></i>
                    </Link>
                </div>
                <hr />
                <div>
                    <Link to="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1">
                        <img alt='olivia' src="https://github.com/mdo.png" width="32" height="32" className="rounded-circle me-2" />
                    </Link>
                </div>
            </div>
        </>
    )
}
