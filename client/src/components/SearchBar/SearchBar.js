import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { citySearch } from '../../store/ducks/search';
import { getWeatherInfo } from '../../store/ducks/weather';
import SuggestionsList from '../SuggestionsList';

export function SearchBar({}) {

    const [state, setState] = useState({
        showDropDown: false,
        selectedValue: ''
    })

    const suggestions = useSelector(state => {
        console.log(JSON.stringify(state));
        return state.search.suggestions;
    });

    const dispatch = useDispatch();

    const node = useRef();

    useEffect(() => {

    }, [suggestions]);

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value)
        setState(prevState => ({
            ...prevState,
            selectedValue: value,
        }));
        if (value.length >= 3) {
            dispatch(citySearch(value));
            showDropDown()
        }
    }

    const showDropDown = () => {
        setState(prevState => ({
            ...prevState,
            showDropDown: true
        }));
        document.addEventListener('click', (event) => {
            if (node && node.current && node.current.parentNode.contains(node.current)) {
                hideDropDown();
            }
        })
    }

    const hideDropDown = () => {
        setState(prevState => ({
            ...prevState,
            showDropDown: false
        }));
        document.removeEventListener('clikc', (e) => {});
    }

    const onItemSelected = (e, selected) => {
        e.preventDefault();
        console.log(selected);
        setState(prevState => ({
            ...prevState,
            selectedValue: selected,
        }));
        hideDropDown();
    }

    const onSearchConfirm = (e) => {
        e.preventDefault();
        dispatch(getWeatherInfo(state.selectedValue));
    }

    return (
        <div className="col-md-12" ref={node}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    name="search"
                    placeholder="Search for the city"
                    className="form-control"
                    aria-label="city-input"
                    autoComplete="off"
                    value={state.selectedValue}
                    onChange={handleChange} />

                <div className="input-group-append">
                    <button className="btn btn-primary btn-md" onClick={onSearchConfirm}>
                        Get weather
                </button>
                </div>
            </div>
            {state.showDropDown && suggestions && suggestions.length > 0 ?
                <SuggestionsList suggestions={suggestions} onItemClicked={onItemSelected} />
                : null}
        </div>
    )
}