import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

        const [categories, setcategories] = useState(['One Punch', 'Dragon Ball']);

        const onAddCategory = () => setcategories(['Valorant', ...categories]);

        // console.log(categories);

    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory/>
            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                    })
                }
                {/* <li>ABC</li> */}
            </ol>
                {/* Gif Item */}
        
        </>
    )
}