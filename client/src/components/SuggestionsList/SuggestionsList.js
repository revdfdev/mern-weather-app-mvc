import React from 'react';
import SuggestionsListItem from '../SuggestionsListItem';
import "./SuggestionList.css";

export function SuggestionsList ( { suggestions, onItemClicked } ) {

    return (
        <div className="custom-dropdown-container">
            <ul className="list-group">
                {suggestions.map(suggestion => {
                    console.log(suggestion);
                    return (
                        <SuggestionsListItem key={suggestion.cityId} suggestion={suggestion} onSuggestionClick={onItemClicked} />
                    )
                }
                )}
            </ul>
        </div>
    )
}

