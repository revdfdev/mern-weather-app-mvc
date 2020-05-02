import React from 'react';

export const SuggestionsListItem = ({ suggestion, onSuggestionClick }) =>
    <li className="list-group-item custom-dropdown" onClick={e => {
        onSuggestionClick(e, suggestion.name);
    }}>
        {`${suggestion.name}` + ` - ${suggestion.country}`}
    </li>
