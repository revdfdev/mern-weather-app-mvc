import React from 'react';
import "./Content.css";

export function Content({ weatherInfo }) {

    return (
        <div className="d-flex justify-content-center">
            <div className="weather">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <span className="icon">
                                <img className="img-fluid" src={weatherInfo.condition.icon} />
                            </span>
                            <div className="title">
                                <p>{weatherInfo.cityname}</p>
                            </div>
                            <div className="temp">{weatherInfo.temp}<sup>&deg;</sup>c</div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="header">Condition</div>
                                    <div className="value">{weatherInfo.condition.name}</div>
                                </div>
                                <div className="col-4">
                                    <div className="header">Min</div>
                                    <div className="value">{weatherInfo.temp_min}<sup>&deg;</sup>c</div>
                                </div>
                                <div className="col-4">
                                    <div className="header">Max</div>
                                    <div className="value">{weatherInfo.temp_max}<sup>&deg;</sup>c</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}