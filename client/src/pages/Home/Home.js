import React, { useState, useEffect } from 'react'
import SearchBar from '../../components/SearchBar';
import WeatherContent from '../../components/WeatherContent';


export function Home({  }) {

    return (
        <>
            <SearchBar />
            <WeatherContent />
        </>
    )
}