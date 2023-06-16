import React from 'react';
import './TryKNIME.css';
import {useEffect, useState} from "react";
import arrow from '../../img/arrow.png';
import csvimg from '../../img/csvReader.svg';
import excelimg from '../../img/excelReader.svg';
import jsonimg from '../../img/jsonReader.svg';

export const TryKNIME = () => {
          const [categ, setCateg] = useState(0);
            function FirstText() {
                return (
                    <div className="right">
                        <h1>Этапы работы с данными</h1>
                        <p>
                            Как говорилось ранее, KNIME Analytics Platform позволяет работать с
                            данными без написания кода. Давайте рассмотрим поэтапное решение
                            какой-нибудь несложной задачи.
                        </p>
                        <p>
                            Нам дали ответственное задание - проанализировать результаты
                            профориентационного теста, который проводил наш институт на базе
                            "Яндекс.Форм".
                        </p>
                        <p>С чего начнём?</p>
                        <div className="right__img">
                            <img src={arrow} className="arrow-img" />
                        </div>
                    </div>
                );
            }
            function DataText() {
                return (
                    <div className="right">
                        <h1>И вы абсолютно правы!</h1>
                        <p>
                            Любая работа с данными начинается со сбора этих данных. Мы условились,
                            что анкетирование проходило на базе "Яндекс.Форм". В каком формате
                            стоит выгрузить данные? Не будем углубляться в возможности самих
                            "Форм", лучше рассмотрим, с какими данными умеет работать KNIME.
                        </p>
                        <p>
                            Итак, в KNIME есть широкое разнообразие нод, в том числе тех, что
                            умеют преобразовывать различные форматы данных в формат, удобный
                            самому KNIME. Вы сами можете найти необходимые вам ноды, их названия
                            довольно предсказуемы:
                        </p>
                        <div className="right__img">
                            <div className="img__block">
                                <div>
                                    <img src={excelimg} />
                                </div>
                                <div>Excel Reader</div>
                            </div>
                            <div className="img__block">
                                <div>
                                    <img src={jsonimg} />
                                </div>
                                <div>JSON Reader</div>
                            </div>
                            <div className="img__block">
                                <div>
                                    <img src={csvimg} />
                                </div>
                                <div>CSV Reader</div>
                            </div>
                        </div>
                        <p>Для нашего случая выберем Excel Reader. Консервативно и надёжно.</p>
                    </div>
                );
            }

            function OtherText() {
                return (
                    <div className="right">
                        <h1>
                            Вы торопите события, у вас пока нет никаких данных для этого этапа.
                        </h1>
                        <p>
                            Как говорилось ранее, KNIME Analytics Platform позволяет работать с
                            данными без написания кода. Давайте рассмотрим поэтапное решение
                            какой-нибудь несложной задачи.
                        </p>
                        <p>
                            Нам дали ответственное задание - проанализировать результаты
                            профориентационного теста, который проводил наш институт на базе
                            "Яндекс.Форм".
                        </p>
                        <p>С чего начнём?</p>
                        <div className="right__img">
                            <img src={arrow} alt="" className="img" />
                        </div>
                    </div>
                );
            }

            return (
                <div className="app">
                    <div className="component">
                        <div className="cn-wrapper" id="cn-wrapper">
                            <ul>
                                <li onClick={() => setCateg(1)}>
                                    <a>
                                        <span>Сбор Данных</span>
                                    </a>
                                </li>
                                <li onClick={() => setCateg(2)}>
                                    <a>
                                        <span>Обработка</span>
                                    </a>
                                </li>
                                <li onClick={() => setCateg(3)}>
                                    <a>
                                        <span>Анализ Данных</span>
                                    </a>
                                </li>
                                <li onClick={() => setCateg(4)}>
                                    <a>
                                        <span>Визуализация</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {categ === 0 ? <FirstText /> : categ === 1 ? <DataText /> : <OtherText />}
                </div>
            );
};
