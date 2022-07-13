import { useState } from 'react';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault(); //Evita el refresh de la web
        if (inputValue.trim().length <= 1) return;
        setCategories(categories => [inputValue, ...categories]);
        setinputValue('');
    }

    return(
        <form onSubmit={onSubmit}>
            <input
                type="Text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}