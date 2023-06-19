import React, {useEffect} from 'react';
import './News.css';
import {useParams} from "react-router-dom";
import search from "../../img/search.svg";

export const News = ({news,navigate,searchValue,setSearchValue}) => {
    let {id} = useParams()

    return (
        <>
            <div className={'titleNews'}>{news[id].title}</div>
                <div className={'br'}>
                    <div className="position">
                        <button style={{width: '300px', cursor: 'pointer'}} onClick={() => navigate(-1)}>Вернуться обратно</button>
                        <div style={{width: '100%'}}>
                            <div className={'dragImg'}>
                                <a href = {news[id].link}><img src={news[id].img} /> </a>
                            </div>
                        </div>

                        <p style={{whiteSpace: 'nowrap', margin: '0 0 0 10px'}}>Перенеси в KNIME</p>
                    </div>
                </div>
                <div className={'descriptionNews'}>
                    <div className={'positionDescription'}>
                        <img src={news[id].img} alt=""/> 
                        <div className={'descriptionNew'}>
                            <p>{news[id].description}</p>
                        </div>
                    </div>
                </div>
        </>

    );
};

