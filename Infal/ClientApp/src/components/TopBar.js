import React from 'react';
import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <>
            <nav className="navbar fix navbar-expand-lg navbar-light bg-light shadow-sm p-3">
                <div className="container-fluid LeftSpaceTop">
                    <Link className="navbar-brand px-3" to="/">
                        <b className='p-3 text-center'>Infal</b>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-3">
                                <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
                            </li>

                            <li className="nav-item dropdown px-3">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Accounting
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className='container p-2'>
                                        <div className='row'>
                                            <div className='col-sm-3 p-2'>
                                                <h6 className='text-success menuHead'>Account - 1</h6>
                                                <div id="dropdown1" className="dropdown">
                                                    <ul role="menu">
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="/account">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-clock fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Kendo Grid</span>
                                                                    <p>Shorts featured today by curators</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="/formDemo">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-laptop fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Form Demo</span>
                                                                    <p>Leading creatives livestreams</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#subscriptions">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sp.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-clock fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Subscriptions</span>
                                                                    <p>Gain exclusive access</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#creative-feed">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/cf.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-building-columns fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Creative Feed</span>
                                                                    <p>See trending creations</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-sm-3 p-2'>
                                                <h6 className='text-success menuHead'>Account - 2</h6>
                                                <div id="dropdown2" className="dropdown">
                                                    <ul role="menu">
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#best-of-the-day">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/botd.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-circle-check fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Best of the day</span>
                                                                    <p>Shorts featured today by curators</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#featured-streams">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/fs.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-message fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Featured Streams</span>
                                                                    <p>Leading creatives livestreams</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#subscriptions">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sp.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-dollar fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Subscriptions</span>
                                                                    <p>Gain exclusive access</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#creative-feed">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/cf.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-chart-pie fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Creative Feed</span>
                                                                    <p>See trending creations</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-sm-3 p-2'>
                                                <h6 className='text-success menuHead'>Account - 3</h6>
                                                <div id="dropdown3" className="dropdown">
                                                    <ul role="menu">
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#best-of-the-day">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-book fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Best of the day</span>
                                                                    <p>Shorts featured today by curators</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#featured-streams">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-star fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Featured Streams</span>
                                                                    <p>Leading creatives livestreams</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#subscriptions">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-circle-play fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Subscriptions</span>
                                                                    <p>Gain exclusive access</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#creative-feed">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-file fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Creative Feed</span>
                                                                    <p>See trending creations</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-sm-3 p-2'>
                                                <h6 className='text-success menuHead'>Account - 4</h6>
                                                <div id="dropdown4" className="dropdown">
                                                    <ul role="menu">
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#best-of-the-day">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-star fa-flag text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Best of the day</span>
                                                                    <p>Shorts featured today by curators</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#featured-streams">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-comment fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Featured Streams</span>
                                                                    <p>Leading creatives livestreams</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#subscriptions">
                                                            <div className='p-2'>
                                                                    <i className='fa fa-user fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Subscriptions</span>
                                                                    <p>Gain exclusive access</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#creative-feed">
                                                            <div className='p-2'>
                                                                    <i className='fa fa-folder fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Creative Feed</span>
                                                                    <p>See trending creations</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-3">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Inventory
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className='container p-2'>
                                        <div className='row'>
                                            <div className='col-sm-3 p-2'>
                                                <h6 className='text-success menuHead'>Inventory - 1</h6>
                                                <div id="dropdown1" className="dropdown">
                                                    <ul role="menu">
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="/inventory">
                                                                {/* <img alt='olivia' src="http://www.w3.org/2000/svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-clock fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Best of the day</span>
                                                                    <p>Shorts featured today by curators</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#featured-streams">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/fs.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-laptop fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Featured Streams</span>
                                                                    <p>Leading creatives livestreams</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#subscriptions">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sp.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-clock fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Subscriptions</span>
                                                                    <p>Gain exclusive access</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#creative-feed">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/cf.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-building-columns fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Creative Feed</span>
                                                                    <p>See trending creations</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-sm-3 p-2'>
                                                <h6 className='text-success menuHead'>Inventory - 2</h6>
                                                <div id="dropdown2" className="dropdown">
                                                    <ul role="menu">
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#best-of-the-day">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/botd.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-circle-check fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Best of the day</span>
                                                                    <p>Shorts featured today by curators</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#featured-streams">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/fs.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-message fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Featured Streams</span>
                                                                    <p>Leading creatives livestreams</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#subscriptions">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/sp.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-dollar fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Subscriptions</span>
                                                                    <p>Gain exclusive access</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#creative-feed">
                                                                {/* <img alt='olivia' src="https://raw.githubusercontent.com/Evavic44/responsive-navbar-with-dropdown/main/assets/icons/cf.svg" className="icon" /> */}
                                                                <div className='p-2'>
                                                                    <i className='fa fa-chart-pie fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Creative Feed</span>
                                                                    <p>See trending creations</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-sm-3 p-2'>
                                                <h6 className='text-success menuHead'>Inventory - 3</h6>
                                                <div id="dropdown3" className="dropdown">
                                                    <ul role="menu">
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#best-of-the-day">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-book fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Best of the day</span>
                                                                    <p>Shorts featured today by curators</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#featured-streams">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-star fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Featured Streams</span>
                                                                    <p>Leading creatives livestreams</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#subscriptions">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-circle-play fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Subscriptions</span>
                                                                    <p>Gain exclusive access</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#creative-feed">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-file fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Creative Feed</span>
                                                                    <p>See trending creations</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-sm-3 p-2'>
                                                <h6 className='text-success menuHead'>Inventory - 4</h6>
                                                <div id="dropdown4" className="dropdown">
                                                    <ul role="menu">
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#best-of-the-day">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-star fa-flag text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Best of the day</span>
                                                                    <p>Shorts featured today by curators</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#featured-streams">
                                                                <div className='p-2'>
                                                                    <i className='fa fa-comment fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Featured Streams</span>
                                                                    <p>Leading creatives livestreams</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#subscriptions">
                                                            <div className='p-2'>
                                                                    <i className='fa fa-user fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Subscriptions</span>
                                                                    <p>Gain exclusive access</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li role="menuitem">
                                                            <Link className="dropdown-link" to="#creative-feed">
                                                            <div className='p-2'>
                                                                    <i className='fa fa-folder fa-lg text-success'></i>
                                                                </div>
                                                                <div>
                                                                    <span className="dropdown-link-title">Creative Feed</span>
                                                                    <p>See trending creations</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-3">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Payroll
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Pay-1</Link></li>
                                    <li><Link className="dropdown-item" to="#">Pay-1</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Pay-1</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-3">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Balance
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Bal-1</Link></li>
                                    <li><Link className="dropdown-item" to="#">Bal-1</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Bal-1</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown px-3">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reports
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">Bal-1</Link></li>
                                    <li><Link className="dropdown-item" to="#">Bal-1</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Bal-1</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}
