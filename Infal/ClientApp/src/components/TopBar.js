import '@progress/kendo-theme-default/dist/all.css'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from "@progress/kendo-react-layout";
import Axios from "axios";

export default function TopBar() {

    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get("https://localhost:44460/menu/get").then((response) => {
            setItems(response.data.data);
        });
    }, []);

    const ItemRender = (props) => {
        // find the menu by name from the menu list.
        let menuItem = items.find(x => x.name === props.item.text);
        let btCol = 12 / menuItem.menuList.length;

        return (

            // create menu UI baised on menu item and nested list.

            <div className='container p-2'>
                <div className='row'>
                    {
                        menuItem.menuList.map(item =>

                            <div className={'col-sm-' + btCol + ' p-2'} key={item.name}>
                                <h6 className='text-success menuHead'>{item.name}</h6>
                                <div id="dropdown1" className="dropdown">
                                    <ul role="menu">
                                        {
                                            item.menuList.length === 0 ? (
                                                null
                                            ) : (
                                                item.menuList.map(childitem =>
                                                    <li role="menuitem">
                                                        <Link className="dropdown-link" to={childitem.url}>
                                                            <div className='p-2'>
                                                                <i className={'fa ' + childitem.icon + ' fa-lg text-success'}></i>
                                                            </div>
                                                            <div>
                                                                <span className="dropdown-link-title">{childitem.name}</span>
                                                                <p>{childitem.description}</p>
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
        // this function call when a kendo menu click.
        navigate(event.item.data.route);
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
                                item.menuList.length === 0 ? (
                                    <MenuItem text={item.name} key={item.name} data={{
                                        route: "/",
                                    }} />
                                ) : (
                                    <MenuItem text={item.name} key={item.name} contentRender={ItemRender} />
                                )
                            ))}
                        </Menu>
                    </div>
                </div>
            </nav>
        </>
    )
}
