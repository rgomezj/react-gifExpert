import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Metal Gear']); 

  const onAddCategory = (newCategory) => {
      if( categories.some(item => item.toUpperCase() === newCategory.toUpperCase())) { return; }
      setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory = { onAddCategory }>
      </AddCategory>
  
      <ol>
        { categories.map(cat => <GifGrid key={ cat } category={ cat } ></GifGrid>)}
      </ol>
    </>
  )
}