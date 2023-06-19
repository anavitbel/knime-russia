import React from 'react';
import {Link} from "react-router-dom";
import './RoutesPage.css'
import search from "../../img/search.svg";
export const RoutesPage = ({filteredValue,news,searchValue,trimText,setSearchValue}) => {
    return (
        <>
            <div className="routes">
                <div className={'titleRoute'}>Узлы в KNIME</div>
                <div className={'subTitleRoute'}>Результаты поиска: {filteredValue.length}</div>
            </div>
            <div className="wrapperNews">
                <div className="news">
                    {news.filter((item,index) => {
                        return searchValue.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searchValue)
                    }).map((el,index) => (
                        <Link to={`news/${el.id}`}>
                            <div className="part">
                                <div className="imgNews">
                                    <img src={el.img}/>
                                </div>
                                <div className="title">{el.title}</div>
                                <div className="description">
                                    {trimText(`${el.description}`)}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};
