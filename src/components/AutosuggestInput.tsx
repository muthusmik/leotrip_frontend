import React, { useState } from 'react';
import Autosuggest, { InputProps } from 'react-autosuggest';

// Sample list of suggestions
const suggestions: string[] = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grapes', 'Kiwi', 'Lemon', 'Mango', 'Orange'
];

function AutosuggestInput() {
    const [value, setValue] = useState<string>('');
    const [suggestionsList, setSuggestionsList] = useState<string[]>([]);

    const getSuggestions = (inputValue: string): string[] => {
        return suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
        setSuggestionsList(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestionsList([]);
    };

    const onSuggestionSelected = (event: React.FormEvent, { suggestionValue }: { suggestionValue: string }) => {
        setValue(suggestionValue);
    };

    const inputProps: InputProps<string> = {
        placeholder: 'Type a fruit name',
        value,
        onChange: (_, { newValue }: { newValue: string }) => setValue(newValue)
    };

    const renderSuggestion = (suggestion: { name: string; imageUrl: string }) => (
        <div className="suggestion-item">
            <img src={suggestion.imageUrl} alt={suggestion.name} className="suggestion-image" />
            <div className="suggestion-text">{suggestion.name}</div>
        </div>
    );

    return (
        <Autosuggest
            suggestions={suggestionsList}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={suggestion => suggestion}
            renderSuggestion={suggestion => <div className='bg-orange-200 text-center p-2 font-poppinsRegular'>{suggestion}</div>}
            inputProps={inputProps}
        />
    );
}

export default AutosuggestInput;
