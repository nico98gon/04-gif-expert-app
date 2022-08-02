import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setinputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //Evita el refresh de la web
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return(
        <form onSubmit = { onSubmit }>
            <input
                type = "Text"
                placeholder = "Buscar gifs"
                value = { inputValue }
                onChange = { onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}