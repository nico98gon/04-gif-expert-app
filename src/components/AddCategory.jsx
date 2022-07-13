import { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault(); //Evita el refresh de la web
        console.log(inputValue);
    }

    return(
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="Text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}