import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

        const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

        const onAddCategory = (newCategory) => {
            if(categories.includes(newCategory))return;
            setCategories([newCategory, ...categories]);
        }

    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory 
                onNewCategory={onAddCategory}
            />

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