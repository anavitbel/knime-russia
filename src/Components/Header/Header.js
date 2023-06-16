import React from 'react';
import logo from "../../img/logo.png";
import search from "../../img/search.svg";
import './Header.css'
import {Link, useLocation} from "react-router-dom";

export const Header = ({navigate, searchValue, setSearchValue}) => {
    const location = useLocation()

    return (
        <>
            <header>
                <div className="menu-bar">
                    <Link className="img-logo" to={'/'}>
                        <img src={logo} style={{width: '100%', height: '100%', position: 'relative'}}/>
                    </Link>

                    <nav className="nav-d">
                        <div sclassName="nav-container">
                            <ul style={{marginBottom: '10px', marginTop: '0px'}}>
                                <li className="nav-item">
                                    <Link class={location.pathname === '/' ? 'nav-btn-blue' : 'nav-btn-grey'}  to={'/'}>
                                        Главная
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link class={location.pathname === '/tryKNIME' ? 'nav-btn-blue' : 'nav-btn-grey'} to={'/tryKNIME'}>
                                        Пример работы
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link class={location.pathname === '/routes' ? 'nav-btn-blue' : 'nav-btn-grey'} to={'/routes'}>
                                        Узлы
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link class={location.pathname === '/documentation' ? 'nav-btn-blue' : 'nav-btn-grey'} to={'/documentation'}>
                                        Документация
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link class={location.pathname === '/about' ? 'nav-btn-blue' : 'nav-btn-grey'} to={'/about'}>
                                        О сайте
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {location.pathname.includes('/routes') ? <div style={{ position: 'relative' }} className='search' >
                                    <input value={searchValue} onChange={e => {
                                        setSearchValue(e.currentTarget.value)
                                    }} onKeyDown={e => e.key === 'Enter' ? navigate(-1) : null} placeholder={'search'} type="text" />
                                    <img className={'searchImg'} src={search} alt="search" />
                                    </div> : null}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                
            </header>

        </>
    );
};
