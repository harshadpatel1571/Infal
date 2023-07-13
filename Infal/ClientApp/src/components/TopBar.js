import '@progress/kendo-theme-default/dist/all.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from "@progress/kendo-react-layout";

export default function TopBar() {

    let items = [
        {
            text: "Dashboard",
            cssClass: "nav-item px-3",
            items: null
        },
        {
            text: "Account",
            cssClass: "nav-item dropdown px-3",
            items: [
                {
                    text: "Account-1",
                    cssClass: "dropdown-link",
                    items: [
                        {
                            text: "Kendo Grid",
                            cssClass: "dropdown-link",
                            items: null
                        },
                        {
                            text: "Form Demo",
                            cssClass: "dropdown-link",
                            items: null
                        },
                        {
                            text: "Login Demo",
                            cssClass: "dropdown-link",
                            items: null
                        },
                        {
                            text: "Creative Feed",
                            cssClass: "dropdown-link",
                            items: null
                        },
                    ],
                },
                {
                    text: "Account-2",
                    cssClass: "dropdown-link",
                    items: [
                        {
                            text: "Kendo Grid",
                            cssClass: "dropdown-link",
                            items: null
                        },
                        {
                            text: "Form Demo",
                            cssClass: "dropdown-link",
                            items: null
                        },
                    ],
                },
                {
                    text: "Account-3",
                    cssClass: "dropdown-link",
                    items: [
                        {
                            text: "Kendo Grid",
                            cssClass: "dropdown-link",
                            items: null
                        },
                    ],
                },
                {
                    text: "Account-4",
                    cssClass: "dropdown-link",
                    items: [
                        {
                            text: "Kendo Grid",
                            cssClass: "dropdown-link",
                            items: null
                        },
                        {
                            text: "Form Demo",
                            cssClass: "dropdown-link",
                            items: null
                        },
                    ],
                },
            ],
        },
        {
            text: "Dashboard",
            cssClass: "nav-item px-3",
            items: null
        },
    ];

    const contentRender = (props) => {
        console.log(props.item);

        let menuItem = items.find(x => x.text == props.item.text);
        console.log(menuItem);

        return (

            <div className='container p-2'>
                <div className='row'>
                    {
                        menuItem.items.map(item =>
                            <div className='col-sm-3 p-2'>
                                <h6 className='text-success menuHead'>{item.text}</h6>
                                <div id="dropdown1" className="dropdown">
                                    <ul role="menu">
                                        {
                                            item.items == undefined || item.items == null ? (
                                                null
                                            ) : (
                                                item.items.map(childitem =>
                                                    <li role="menuitem">
                                                        <Link className="dropdown-link" to="/account">
                                                            <div className='p-2'>
                                                                <i className='fa fa-clock fa-lg text-success'></i>
                                                            </div>
                                                            <div>
                                                                <span className="dropdown-link-title">{childitem.text}</span>
                                                                <p>Shorts featured today by curators</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            )
                                        }

                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );

    };

    const onSelect = (event) => {
        console.log(event.item.data.route);
    };

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
                        <Menu onSelect={onSelect}>
                            {items.map(item => (
                                console.log(item),
                                item.items == undefined || item.items == null ? (
                                    <MenuItem text={item.text} key={item.text} data={{
                                        route: "/",
                                    }} />
                                ) : (
                                    <MenuItem text={item.text} key={item.text} contentRender={contentRender} />
                                )
                            ))}
                        </Menu>
                    </div>
                </div>
            </nav>
        </>
    )
}
