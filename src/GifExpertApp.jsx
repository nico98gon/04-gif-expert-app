import { useState } from "react";

export const GifExpertApp = () => {

        const [categories, setcategories] = useState(['One Punch', 'Naruto']);

        console.log(categories);

    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}

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