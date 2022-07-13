import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

        const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

        const onAddCategory = () => setCategories(['Valorant', ...categories]);

        // console.log(categories);

    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory setCategories={setCategories}/>
            {/* Listado de Gif */}
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