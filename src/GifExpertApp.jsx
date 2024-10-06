import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto'])


    const onAddCategory = (newCategory) => {

        if (categories.find(categoria => categoria.toLowerCase() === newCategory.toLowerCase())) return

        setCategories([newCategory, ...categories])
    }

    return (

        <div className="container">
            <h1>Gifs App</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />


            {
                categories.map(category =>
                (<GifGrid
                    key={category}
                    category={category}
                />))
            }
        </div>



    )
}
