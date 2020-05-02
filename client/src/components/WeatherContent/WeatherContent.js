import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Content from '../Content';
import BusLoader from '../BusLoader';
import { useNavigate } from 'react-router-dom';

export function WeatherContent() {

    const weatherState = useSelector(state => state.weather);

    const navigate = useNavigate();

    if (weatherState.error !== null) {
        const state = {
            errorCode: weatherState.errorCode,
            error: weatherState.error
        };
        navigate(`/${weatherState.errorCode}`, {
            state
        });
    }

    useEffect(() => {
    }, [weatherState]);

    return (
        <div>
            {weatherState.isLoading || weatherState.weatherInfo.cityname === '' ? <BusLoader /> : <Content weatherInfo={weatherState.weatherInfo} />}
        </div>
    )
}