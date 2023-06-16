import React from 'react';
import './Documentation.css'

export const Documentation = () => {
    return (
        <>
            <section className="main-title-sec u-section-1">
                        <h1 className="title-knime">
                            KNIME<br/>Analytics Platform<br/>
                        </h1>
                        <p>версия 4.7</p>
            </section>
            <section className="guide-list-sec u-section-2">
                    <div className="guide-list-div">
                        <table className="table-list">
                            <colgroup>
                                <col width="88%"/>
                                    <col width="12%"/>
                            </colgroup>
                            <tbody>
                            <tr style={{height: '70px', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                                <td style={{fontSize: '20px'}}>KNIME Analytics
                                    Platform Руководство по установке
                                </td>
                                <td>
                                    <a className="readBtn" href="documents/installation_guide.html">Читать</a>
                                </td>
                            </tr>
                            <tr style={{height: '70px', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                                <td style={{fontSize: '20px'}}>KNIME
                                    Обзор рабочего пространства
                                </td>
                                <td>
                                    <a className="readBtn" href="documents/workbench_guide.html">Читать</a>
                                </td>
                            </tr>
                            <tr style={{height: '70px', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                                <td style={{fontSize: '20px'}}>KNIME
                                    Советы по работе
                                </td>
                                <td>
                                    <a className="readBtn" href="#" target="_blank">Читать</a>
                                </td>
                            </tr>
                            <tr style={{height: '70px', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                                <td style={{fontSize: '20px'}}>KNIME
                                    Расширения и интеграции
                                </td>
                                <td>
                                    <a className="readBtn" href="documents/extensions_and_integrations.html">ЧИТАТЬ</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
            </section>

        </>
);
};
