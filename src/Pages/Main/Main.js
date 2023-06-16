import React from 'react';
import './Main.css'
import gatherWrangle from '../../img/gather-wrangle.png';
import modelVisualize from '../../img/model-visualize.png';
import consumeOptimize from '../../img/consume-optimize.png';
import deployManage from '../../img/deploy-manage.png';

export const Main = () => {
    return (
        <>
            <section className="sec-1">
                <div className="div-sec-1">
                    <div className="title-with-button">
                        <div className="titleMain">
                            <h2 className="h2-title">
                                KNIME Analytics<br/>Platform
                            </h2>
                            <p className="subtitle">возможность обработки и визуализации данных без единой
                                строчки кода</p>
                        </div>
                        <a href="#sec-2" className="download-btn">ПОДРОБНЕЕ</a>
                    </div>
                </div>
            </section>
            <section className="sec-2" id="sec-2">
                <p className="text-2">Аналитическая платформа KNIME - это программная платформа анализа, интеграции данных и подготовки отчётности с открытым исходным кодом.&nbsp;</p>
            </section>
            <section className="sec-3">
                <div className="div-sec-3">
                    <h3>Как KNIME помогает в анализе данных?</h3>
                    <div className="create-and-product">
                        <div>
                            <div className="grey-line"></div>
                            <div className="create">
                                <p>Создавать</p>
                            </div>
                        </div>
                        <div>
                            <div className="grey-line"></div>
                            <div className="create">
                                <p>Производить</p>
                            </div>
                        </div>
                    </div>
                    <div className="repeater">
                        <div className="rep-col">
                            <p className="quadro-text">Преобразовать</p>
                            <img src={gatherWrangle} />
                                <p className="descp-text">Объединяйте и преобразовывайте ваши данные</p>
                        </div>

                        <div className="rep-col">
                            <p className="quadro-text">Визуализировать</p>
                            <img src={modelVisualize} />
                                <p className="descp-text">Найдите взаимосвязи в ваших данных с помощью выбранных инструментов</p>
                        </div>
                        <div className="rep-col">
                            <p className="quadro-text">Развертывать</p>
                            <img src={deployManage} />
                                <p className="descp-text">Работайте с данными вместе с коллегами в рамках одной компании</p>
                        </div>
                        <div className="rep-col">
                            <p className="quadro-text">Использовать</p>
                            <img src={consumeOptimize} />
                                <p className="descp-text">Используйте информацию, полученную на основе ваших данных</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-4">
                <div className="div-sec-4">
                    <div className="sys-text">
                        <h3 style={{marginTop: '0px', color: '#000000'}}>Системные<br /> требования</h3>
                    </div>
                    <div className="sys-list">
                        <ul className="u-text u-text-2">
                            <li>Операционная система: Windows (7 или выше), macOS (10.13 или выше), Linux (Ubuntu 18.04 или выше)</li>
                            <li>Процессор: Intel Core i3 или выше</li>
                            <li>Оперативная память: 8 ГБ или выше</li>
                            <li>Свободное место на диске: 5 ГБ или выше</li>
                        </ul>
                        <a href="https://www.knime.com/downloads" className="download-btn">Скачать</a>
                        <a href="documents/installation_guide.html" className="install-btn">Гайд по установке</a>
                    </div>
                </div>
            </section>
        </>
    );
};
